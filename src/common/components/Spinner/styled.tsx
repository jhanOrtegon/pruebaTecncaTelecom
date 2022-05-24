import styled, { keyframes } from 'styled-components';


const skBouncedelay = keyframes`
    0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
`

export const Spinner = styled.div`
    text-align: center;
    height: 70vh;
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
`

export const Hijo1 = styled.div`
    width: 18px;
    height: 18px;
    background-color: #333;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: ${skBouncedelay} 1.4s infinite ease-in-out both;
    animation: ${skBouncedelay} 1.4s infinite ease-in-out both;

    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
`

export const Hijo2 = styled.div`
    width: 18px;
    height: 18px;
    background-color: #333;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: ${skBouncedelay} 1.4s infinite ease-in-out both;
    animation: ${skBouncedelay} 1.4s infinite ease-in-out both;

    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
`



export const Hijo3 = styled.div`
    width: 18px;
    height: 18px;
    background-color: #333;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: ${skBouncedelay} 1.4s infinite ease-in-out both;
    animation: ${skBouncedelay} 1.4s infinite ease-in-out both;
`



