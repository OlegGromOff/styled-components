import React from 'react';
import styled from 'styled-components';


const StyledLine = styled.div`
    font-size: 24px;
    color: ${props => props.color || 'white'}
`

const Line = (props) => { // в пропсы смогу передавать цвет и т.д
    return <StyledLine {...props} />

};

export default Line;