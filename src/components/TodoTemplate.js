import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  background: white;
  width: 512px;
  height: 768px;
  position: relative; /* 추후 자식인 absoulte 버튼이 부모 relative 를 기준으로 삼고 이동할수있게 부모요소로 absolute 설정해둠 */
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex; //   display: flex;는 block 처럼 자기자신들이 세로나열,크기지정가능 , display: inline-flex; 자기자신들 가로나열
  flex-direction: column; // 자식요소가 세로로 나열됨 : <TodoHead/><TodoList/><TodoCreate/>
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;