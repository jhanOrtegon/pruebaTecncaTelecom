import styled from 'styled-components';

export const CardHeroe = styled.div`
margin: 50px auto;
    display: grid;
    grid-template-columns: 50% 30%;
    margin: auto;
    justify-content: center;
    text-align: center;
    /* gap: 2%; */
    @media(max-width:768px) {
        grid-template-columns: 100%;
    }
`