import React from 'react';

import { FiLogIn } from "react-icons/fi"
import LogoImg from '../../assets/barbearia.svg'

import { Container, Content, Background } from './styles';

const SingIn: React.FC = () => (
    <Container>
        <Content>
            <img src={LogoImg} alt="Baber" height="80px" width="80px" />

            <form>
                <h1>Faca seu login</h1>
                <input type="text" placeholder="E-email"/>

                <input type="password" placeholder="Senha"/>
                
                <button type="submit">Entrar</button>

                <a href="forgot">Esqueci minha senha</a>
            </form>
            <a href="qualquer coisa">
                <FiLogIn/>
                Criar conta
            </a>
        </Content>
        <Background />
    </Container>
);


export default SingIn;