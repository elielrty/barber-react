import styled from 'styled-components'

export const Container = styled.div`
    background: #232129;
        border-radius: 10px;
        border: 2px solid #232129;
        padding: 16px;
        width: 100%;
        display: flex;
        align-items: center;
        color: #666360; //vai pergar no icone
    input {
        background: transparent;
        border: 0;
        flex: 1;
        color: #fff;

        &::placeholder {
            color: #666360;
        }
    }
    & + div { // todo input que tiver um input em cima vai excurtar o css
           margin-top: 10px; 
        }

    svg {
        margin-right: 16px;
    }
`;