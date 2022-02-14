import React from 'react';
import { FaArrowLeft, FaEnvelope, FaLock, FaUserAlt } from 'react-icons/fa';

import { Input } from '../../components/Input';

import { Container, Content, Form, FormAction, ContentImage } from './styles';

import avatar from '../../assets/avatar.svg';
import logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export const SignUp: React.FC = () => {
  return (
    <Container>
      <ContentImage>
        <img src={avatar} alt="Avatar" />
        <img src={logo} alt="InventX" />
      </ContentImage>

      <Content>
        <Form>
          <span className="underline">Novo por aqui? Faça seu cadastro</span>

          <Input icon={FaUserAlt} type='text' placeholder='Nome completo' required />
          <Input icon={FaUserAlt} type='text' placeholder='Username' required />
          <Input icon={FaEnvelope} type='email' placeholder='E-mail' required />
          <Input icon={FaLock} type='password' isPassword placeholder='Senha' required />

          <Button>Cadastrar</Button>
          <FormAction>
            <Link to="/sign-up">
              {<FaArrowLeft />}
              Voltar para login
            </Link>
          </FormAction>
        </Form>
      </Content>
    </Container>
  )
}
