import React from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import Flex from './components/Flex';
import Console from './components/Console';
import Button from './components/Button';

// создал стилизованный компонент div. Сами стили внутри шаблонных литералов
const AppWrapper = styled.div` 
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`


function App() {
  return (
    //использую созданный мной стилизованный компонент
    // в пропсы передаю цвет
    <AppWrapper>
      <Flex justify="center">
        <Title color={'green'}>
          Hello
        </Title>
      </Flex>
      <Flex direction="column" margin="10px 0">
        <Console />
        <Button color="green" align="flex-end" outlined >Отправить</Button>
      </Flex>
    </AppWrapper>
  );
}

export default App;
