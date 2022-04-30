import React from 'react';
import styled from 'styled-components';

//создал компонент h1
//цвет будет такой какой передам в пропс
// тут если в пропсы передан пропс direction то он и применится, иначе применится row
const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'}; 
    align-items: ${props => props.align || 'stretch'};
    justify-content: ${props => props.justify || 'stretch'};;
    margin: ${({ margin }) => margin || '0'};;
`

const Flex = (props) => { // в пропсы смогу передавать цвет и т.д
    return <StyledFlex {...props} />

};

export default Flex;