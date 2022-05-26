import styled from 'styled-components'

export const ContainerHeroes = styled.div`

`
export const Heroe = styled.div`
    box-shadow: 0px 0px 15px;
    transition: all 0.5s ;
    display: flex;
    flex-direction: column;
    height: 400px;

    :hover{
        transform: scale(1.05);
    }
`
export const HeroeFooter = styled.div`
    padding: 5px;
    text-align: center;
    display: grid;
    margin-top: auto;
    background-color: #fffafade;
    height: 45%;

`
export const HeroeBody = styled.div`
    height: 55%;
`