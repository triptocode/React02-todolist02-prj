import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';


//   TodoListBlock 영역확인을 위해 하단에 배경넣어 체크후 삭제하기 --> background: gray; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;

`;

// function TodoList() {
//   return <TodoListBlock>TodoList</TodoListBlock>;
// }

// function TodoList() {
//     return <TodoListBlock>
//                 <TodoItem text="아침 7시 기상하기" done={true} />
//                 <TodoItem text="오전 9시 리액트 공부하기" done={true} />
//                 <TodoItem text="오후 3시 운동하기" done={true} />
//                 <TodoItem text="오후4시 자격증 공부" done={false} />
//            </TodoListBlock>;
//   }

  function TodoList() {
    const todos = useTodoState();
  
    return (
      <TodoListBlock>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
          />
        ))}
      </TodoListBlock>
    );
  }

export default TodoList;