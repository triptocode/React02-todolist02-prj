import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';


// CheckCircle 컴포넌트는 좌측의 체크할수있는 공간인 동그라미
const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px; 
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

// Remove 컴포넌트는 우측의 쓰레기통 아이콘을 보여줌
const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6; 
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

// to-do 해야할일 작성한 내용인 텍스트 컴포넌트
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;


// 위의 3개 컴포넌트들을 담을 부모 컴포넌트
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;


// // TodoList 에서 TodoItem의 파라미터로 props를 통해 데이터 전달
// function TodoItem({ id, done, text }) {
//   return (
//     <TodoItemBlock>
//          {/* 해설 :  done && <MdDone/> 는  done 값이 있다면 <MdDone/> 를 화면에 렌더링하겠다는 것   */}
//         <CheckCircle done={done}>{done && <MdDone />}</CheckCircle> 
//         <Text done={done}>{text}</Text>
//         <Remove>
//           <MdDelete />
//         </Remove>
//     </TodoItemBlock>
//   );
// }

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;