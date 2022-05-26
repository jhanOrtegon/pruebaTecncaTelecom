import styled from 'styled-components';

export const CardHeroe = styled.div`
    display: grid;
    grid-template-columns: 50% 30%;
    margin: auto;
    justify-content: center;
    text-align: center;
    
    @media(max-width:768px) {
        grid-template-columns: 100%;
    }
`