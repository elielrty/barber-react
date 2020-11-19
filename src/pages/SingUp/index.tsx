import React, {useState} from 'react';

import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";
import LogoImg from '../../assets/barbearia.svg';

import { Container, Content, Background } from './styles';
import Input from   '../../components/Input'
import Button from   '../../components/Button'

const SingIn: React.FC = () => {
    const [data, setData] = useState({})

    return (
    <Container>
        <Background />
        <Content>
            <img src={LogoImg} alt="Baber" height="80px" width="80px" />

            <form autoComplete="off">
                <h1>Faça seu cadastro</h1>
                <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
                
                <Input name="email" icon={FiMail} type="text" placeholder="E-email" />

                <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>
                
                <Button type="button">Cadastrar</Button>
          </form>
            <a href="qualquerCoisa">
                <FiArrowLeft/>
                Voltar para o logon
            </a>
        </Content>
    </Container>
)};


export default SingIn;