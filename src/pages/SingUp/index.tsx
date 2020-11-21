import React, {useState} from 'react';
import {Form} from '@unform/web'

import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";
import LogoImg from '../../assets/barbearia.svg';

import { Container, Content, Background } from './styles';
import Input from   '../../components/Input'
import Button from   '../../components/Button'

const SingIn: React.FC = () => {
    const [data, setData] = useState({})

    function handleSubmit(data: object): void {
        console.log(data)
    }

    return (
    <Container>
        <Background />
        <Content>
            <img src={LogoImg} alt="Barbearia" height="80px" width="80px" />

            <Form onSubmit={handleSubmit}>
                <h1>Faça seu cadastro</h1>
                <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
                
                <Input name="email" icon={FiMail} type="text" placeholder="E-email" />

                <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>
                
                <Button type="submit">Cadastrar</Button>
          </Form>
            <a href="qualquerCoisa">
                <FiArrowLeft/>
                Voltar para o logon
            </a>
        </Content>
    </Container>
)};


export default SingIn;