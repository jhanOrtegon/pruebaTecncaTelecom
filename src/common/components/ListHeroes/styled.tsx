import styled from 'styled-components'

export const ContainerHeroes = styled.div`
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    gap: 30px 1.3%;
    margin-bottom: 50px;

    @media(max-width: 992px) {
        grid-template-columns: 32% 32%  32%;
        gap: 30px 2%;
    }
    @media(max-width: 768px) {
        grid-template-columns: 48% 48% ;
        gap: 30px 4%;
    }

    @media(max-width: 425px) {
        grid-template-columns: 100% ;
    }
`
export const Heroe = styled.div`
    box-shadow: 0px 0px 15px;
    transition: all 0.5s ;
    display: flex;
    flex-direction: column;

    :hover{
        transform: scale(1.05);
    }
`
export const HeroeFooter = styled.div`
    padding: 5px;
    text-align: center;
    display: grid;
    margin-top: auto;
    background-color: white;
`
export const HeroeBody = styled.div`

`