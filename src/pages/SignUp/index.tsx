import React, { ChangeEvent, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEnvelope, FaLock, FaUserAlt, FaUserCircle } from 'react-icons/fa';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import avatar from '../../assets/avatar.svg';
import logo from '../../assets/logo.svg';

import { IUsersForm } from '../../interfaces/Users/IUsersForm';

import { Container, Content, AnimationContainer, Form, FormAction, ContentImage } from './styles';
import { api } from '../../services/api';
import { Store } from 'react-notifications-component';

export const SignUp: React.FC = () => {
  const navigation = useNavigate();

  const [userModel, setUserModel] = useState<IUsersForm>({
    name: '',
    username: '',
    email: '',
    password: ''
  });

  // Função que recebe os dados digitados pelo user
  const updateUserModel = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setUserModel({
      ...userModel,
      [event.target.name]: event.target.value
    })
  }, [userModel]);

  const handleRegisterUser = useCallback(async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await api.post('/users', userModel);

      Store.addNotification({
        title: 'Sucesso',
        message: 'Usuário registrado.',
        type: 'success',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated animate__pulse'],
        animationOut: ["animate__animated animate__pulse"],
        dismiss: {
          duration: 2000,
          onScreen: true
        }
      });

      setTimeout(() => {
        navigation('/sign-in');
      }, 2000);

    } catch (err) {
      Store.addNotification({
        title: 'Error',
        message: 'Usuário já está registrado.',
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated animate__shakeX'],
        animationOut: ["animate__animated animate__shakeX"],
        dismiss: {
          duration: 2000,
          onScreen: true
        }
      })
    }
  }, [userModel, navigation]);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form onSubmit={handleRegisterUser}>
            <span className="underline">Novo por aqui? Faça seu cadastro</span>

            <Input icon={FaUserAlt} type='text' name='name' value={userModel.name} onChange={updateUserModel} placeholder='Nome completo' required />
            <Input icon={FaUserCircle} type='text' name='username' value={userModel.username} onChange={updateUserModel} placeholder='Username' required />
            <Input icon={FaEnvelope} type='email' name='email' value={userModel.email} onChange={updateUserModel} placeholder='E-mail' required />
            <Input icon={FaLock} type='password' name='password' value={userModel.password} onChange={updateUserModel} isPassword placeholder='Senha' required />

            <Button type='submit'>Cadastrar</Button>
          </Form>
          <FormAction>
            <Link to="/sign-in">
              {<FaArrowLeft />}
              Voltar para login
            </Link>
          </FormAction>
        </AnimationContainer>
      </Content>

      <ContentImage>
        <img src={avatar} alt="Avatar" />
        <img src={logo} alt="InventX" />
      </ContentImage>
    </Container>
  )
}
