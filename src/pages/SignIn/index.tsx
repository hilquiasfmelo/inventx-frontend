import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLock, FaUserAlt } from 'react-icons/fa';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Content, AnimationContainer, Form, FormAction, ContentImage } from './styles';

import avatar from '../../assets/avatar.svg';
import logo from '../../assets/logo.svg';
import { useSignInUser } from '../../hooks/useSignInUser';
import { ICredentialsUser } from '../../interfaces/Users/ICredentialsUser';
import { Store } from 'react-notifications-component';

export const SignIn: React.FC = () => {
  const { user, signIn } = useSignInUser();

  const [sessionModel, setSessionModel] = useState<ICredentialsUser>({
    username: '',
    password: '',
  });

  const updateSessionModel = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSessionModel({
      ...sessionModel,
      [event.target.name]: event.target.value
    })
  }, [sessionModel]);

  const handleRegisterUser = useCallback(async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signIn(sessionModel);

      Store.addNotification({
        title: "Sucesso",
        message: "Usuário autenticado com sucesso",
        type: "success",
        insert: "top",
        container: 'top-right',
        animationIn: ['animate__animated animate__pulse'],
        animationOut: ["animate__animated animate__pulse"],
        dismiss: {
          duration: 2000,
          onScreen: true
        }
      });
    } catch {
      Store.addNotification({
        title: "Error",
        message: "Username ou senha incorreta.",
        type: "danger",
        insert: "top",
        container: 'top-right',
        animationIn: ['animate__animated animate__shakeX'],
        animationOut: ["animate__animated animate__shakeX"],
        dismiss: {
          duration: 3000,
          onScreen: true
        }
      });
    }
  }, [sessionModel, signIn]);

  // Redenrizará assim que a tela for carregada
  useEffect(() => {
    console.log(user);
  }, [user])

  return (
    <Container>
      <ContentImage>
        <img src={avatar} alt="Avatar" />
        <Link to='/'>
          <img src={logo} alt="InventX" />
        </Link>
      </ContentImage>

      <Content>
        <AnimationContainer>
          <Form onSubmit={handleRegisterUser}>
            <span className="underline">Já cadastrado? Faça seu login</span>

            <Input icon={FaUserAlt} type='text' name='username' value={sessionModel.username} onChange={updateSessionModel} placeholder='Username' required />
            <Input icon={FaLock} type='password' name='password' value={sessionModel.password} onChange={updateSessionModel} isPassword placeholder='Senha' required />

            <Button type='submit'>Entrar</Button>
            <FormAction>
              <Link to="/sign-up">Não tem uma conta? <strong>Registre-se</strong> </Link>
            </FormAction>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  )
}
