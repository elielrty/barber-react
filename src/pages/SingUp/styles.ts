import styled from 'styled-components';
import { shade } from 'polished'

import img from '../../assets/66.jpg';

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

    > a { // o >  e para pegar as tags a acima do content
            color: #666360;
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
                color: ${shade(0.2, '#666360')}
            }
        }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${img}) no-repeat center;
    background-size: cover; // para pegar a img na div toda
`; 