import React from 'react';
import { FaLock, FaUserAlt } from 'react-icons/fa';

import { Input } from '../../components/Input';

import { Container, Content, AnimationContainer, Form, FormAction, ContentImage } from './styles';

import avatar from '../../assets/avatar.svg';
import logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export const SignIn: React.FC = () => {
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
          <Form>
            <span className="underline">Já cadastrado? Faça seu login</span>

            <Input icon={FaUserAlt} type='text' placeholder='Username' required />
            <Input icon={FaLock} type='password' isPassword placeholder='Senha' required />

            <Button>Entrar</Button>
            <FormAction>
              <Link to="/sign-up">Não tem uma conta? <strong>Registre-se</strong> </Link>
            </FormAction>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  )
}
