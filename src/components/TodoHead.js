import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
  background:beige;
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .cWeek {
    margin-top: 4px;
    color: #FF0000;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);
  console.log(undoneTasks);

  const today = new Date();
  // console.log(today); // Sun Mar 26 2023 06:09:02 GMT+0900 (GMT+09:00)
  // console.log(today.toLocaleDateString('ko-KR')); // 2023. 3. 26.
  // console.log(today.toLocaleDateString('en-US')); // 3/26/2023
  // console.log(today.toLocaleDateString('ko-KR', { month: 'long'})); //3월

  const dateString = today.toLocaleDateString(
      'ko-KR' 
      ,{ year: 'numeric', month: 'long', day: 'numeric'}
    );
  const week = today.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <TodoHeadBlock>
      <h2>{dateString}</h2>
      <div className="cWeek">{week}</div>
      <div className="tasks-left">앞으로 할 일: {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
