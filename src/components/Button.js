import React from 'react';
import styled, { css, keyframes } from 'styled-components';

// анимация кнопки, можно подключить в стилях кнопки
const rotateAnimation = keyframes`
    0% {
        transform: rotateZ(0deg);
    }
    100% {
        transform: rotateZ(360deg);
    }
`

const StyledButton = styled.button`
    border: none;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    &: focus {
        outline: none
    };
    &: hover {
        animation: ${rotateAnimation} 1s infinite linear;
    }
    align-self: ${props => props.align || 'stretch'};
    ${props => props.primary && css`
        color: ${props => props.color || 'white'};
        background: ${props => props.background || 'white'};
    `};
    ${props => props.outlined && css`
        color: ${props => props.color || 'white'};
        border: 1px solid ${props => props.color || "white"};
        background: transparent;
    `};
`
// если я передал пропс primary то будут применяться стили указанные в бектиках после primary
//чтобы такая конструкция с primary сработала используем функцию css импортированную из styled-components

// тут я расширил стили для StyledButton и создал компонент LargeButton со всеми стилями от StyledButton и еще свои стили добавил
const LargeButton = styled(StyledButton)` 
    font-size: 32px;
`

const Button = (props) => { // в пропсы смогу передавать цвет и т.д
    return <LargeButton {...props} />


};

export default Button;