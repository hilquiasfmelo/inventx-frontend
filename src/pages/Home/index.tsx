import React from 'react';

import { ButtonStart } from '../../components/ButtonStart';

import { Container, Content, ContentImage } from './styles';

import avatar from '../../assets/avatar.svg';
import logo from '../../assets/logo.svg';

export const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <span>👏 Olá, Bem Vindo</span>
        <h1>Controle <span>TUDO</span> <br /></h1>
        <h2>de forma eficiente</h2>

        <p>
          Organize, edite e planeje todo seu <br />
          <span>inventário tranquilamente</span>
        </p>

        <ButtonStart>Comece aqui!</ButtonStart>
      </Content>

      <ContentImage>
        <img src={avatar} alt="Avatar" />
        <img src={logo} alt="InventX" />
      </ContentImage>

    </Container>
  )
}
