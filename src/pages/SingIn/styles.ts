import styled from 'styled-components';
import { shade } from 'polished'

import img from '../../assets/55.jpg';

export const Container = styled.div`
    height: 100vh; // pegar toda a tela baseada no monitor de que estar vendo

    display: flex;    
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center; //bota tudo no meio
    align-items: center;
    width: 100%;
    max-width: 700px; // vai ficar 100% menos o 700px da img

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
        margin-bottom: 24px;
        }

    input {
        background: #232129;
        border-radius: 10px;
        border: 2px solid #232129;
        padding: 16px;
        width: 100%;
        color: #fff;

        & + input { // todo input que tiver um input em cima vai excurtar o css
           margin-top: 10px; 
        }
    }

    button {
        background: #ff9000;
        height: 56px;
        border-radius: 10px;
        border: 0;
        padding: 0 16px;
        color: #312e38;
        width: 100%;
        font-weight: 500;
        margin-top: 16px;
        transition: background-color 0.2s; // efeito para escurecer a cor  

        &:hover {
            background: ${shade(0.2, '#ff9000')} // vai escurecer a cor em 20% quando colocar o mause
            }
        }
        a {
            color: #f4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#f4ede8')}
            }
        }       
    }

    > a { // o >  e para pegar as tags a so do content
            color: #ff9000;
            display: flex;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;
            align-items: center;
            transition: color 0.2s;
            
            svg {
                margin-right: 16px;
            }

            &:hover {
                color: ${shade(0.2, '#ff9000')}
            }
        }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${img}) no-repeat center;
    background-size: cover; // para pegar a img na div toda
`; 