import styled from 'styled-components';


export const Padre = styled.div`
    color: white;
    height: 80vh;
    display: flex;
    width: 750px;
    margin: auto;

    @media (max-width:600px) {
        width: auto;
    }
`

export const Hijo1 = styled.div`
    background-image: url("/assets/pp.jpg");
    background-repeat:repeat;
    background-size: cover;
    background-color: aliceblue;
    flex: 1;
    box-shadow: 0px 0px 10px;
    margin-top: 120px;
    background-position: center;

    @media (max-width:600px) {
        display: none;
    }

`

export const Hijo2 = styled.div`
    flex: 1;
    background-color: white;
    box-shadow: 0px 0px 10px;   
    margin-top: 120px;
    display: flex;
    flex-direction: column;
`


export const Fondo = styled.div`
      background-image: url("/assets/rr.jpg");
      background-repeat:repeat;
      background-size: cover;
      min-height: 100vh;
      display: flex;
`

export const Button = styled.button`
      background: #000000;
      color: white;
      transition: all 0.5s;
      :hover{
        background: #880b0f;
        color: white;
      }
`

