import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #c7e8c1;
  }
`;

function App() {
  return (
    <TodoProvider>
      
       <GlobalStyle /> 
        {/* 브라우저 전체 바탕화면 영역입니다 */}
        <TodoTemplate>
          <TodoHead/>
          <TodoList/>
          <TodoCreate/>
        </TodoTemplate>

    </TodoProvider>
  );
}

export default App;

