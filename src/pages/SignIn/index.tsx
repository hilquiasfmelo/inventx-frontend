import React from 'react';

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
        <h1>Form</h1>
      </Content>
    </Container>
  )
}
