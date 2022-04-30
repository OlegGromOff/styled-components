import React from 'react';
import styled from 'styled-components';

//создал компонент h1
//цвет будет такой какой передам в пропс
const StyledTitle = styled.h1`
    color: ${props => props.color}; 
`

const Title = (props) => { // в пропсы смогу передавать цвет и т.д
    return <StyledTitle {...props} />

};

export default Title;