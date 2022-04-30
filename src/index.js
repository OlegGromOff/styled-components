import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components' // создаю глобальные стили createGlobalStyle

//создаю обьект глобальных стилей и использую бектики 
const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: consolas;
    
  }
`

const theme = { // тема для приложения
  colors: {
    primary: "green",
    secondary: "red",
  },
  media: {
    phone: "(max-width: 425px)",
    tablet: "(max-width: 768px) and (min-width: 425px)",
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* оберни все в фрагмент и добавь сюда компонент глобальных стилей Global */}
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
//ThemeProvider нужен для того чтобы пердать приложению стили темы theme
