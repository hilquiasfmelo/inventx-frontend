import React from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';

import { Input } from '../../components/input';

import { Container, Content, ContentImage } from './styles';

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
        <span className="underline">Já cadastrado? Faça seu login</span>

        <Input icon={FaUserAlt} type="email" placeholder="Entre com seu username" required />
        <Input icon={FaLock} type="password" isPassword placeholder="Senha" required />
      </Content>
    </Container>
  )
}
