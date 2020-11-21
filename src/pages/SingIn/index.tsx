import React, {useState} from 'react';

import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import LogoImg from '../../assets/barbearia.svg';

import { Container, Content, Background } from './styles';
import Input from   '../../components/Input';
import Button from   '../../components/Button';
import {Form} from '@unform/web'

const SingIn: React.FC = () => {
    const [data, setData] = useState({});

    function handleSubmit(data: object): void {
        console.log(data)
    }


    return (
    <Container>
        <Content>
            <img src={LogoImg} alt="Baber" height="80px" width="80px" />

            <Form onSubmit={handleSubmit}>
                <h1>Faça seu login</h1>
                <Input name="email" icon={FiMail} type="text" placeholder="E-email" />

                <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>
                
                <Button type="submit">Entrar</Button>

                <a href="forgot">Esqueci minha senha</a>
            </Form>
            <a href="qualquerCoisa">
                <FiLogIn/>
                Criar conta
            </a>
        </Content>
        <Background />
    </Container>
)};


export default SingIn;