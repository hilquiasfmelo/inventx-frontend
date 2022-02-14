import React from 'react';
import { FaLock, FaUserAlt } from 'react-icons/fa';

import { Input } from '../../components/Input';

import { Container, Content, Form, ContentImage } from './styles';

import avatar from '../../assets/avatar.svg';
import logo from '../../assets/logo.svg';

export const SignIn: React.FC = () => {
  return (
    <Container>
      <ContentImage>
        <img src={avatar} alt="Avatar" />
        <img src={logo} alt="InventX" />
      </ContentImage>

      <Content>
        <Form>
          <span className="underline">Já cadastrado? Faça seu login</span>

          <Input icon={FaUserAlt} type='text' placeholder='Username' required />
          <Input icon={FaLock} type='password' isPassword placeholder='Senha' required />
        </Form>
      </Content>
    </Container>
  )
}
