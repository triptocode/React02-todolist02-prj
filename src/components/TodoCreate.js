import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';



// 14번째줄 - #38d9a9: 그린색 / #63e6be: hover시 좀더 밝게 / #20c997: 클릭시 조금 어둡게
// 45번째줄 - #ff6b6b; 빨간색 / #ff8787  hover시 좀더 밝게 / #fa5252: 클릭시 조금 어둡게
// z-index: 5; 다른내용을가려야 해서 
// transition: 0.125s 초 동안 지속  
// transform: translate(-50%, 50%) +추가단추위치 그대로,  
// rotate(45deg); 45도 돌게
const CircleButton = styled.button`

  background: #38d9a9; 
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(''); //2

  const dispatch = useTodoDispatch(); //2
  const nextId = useTodoNextId(); //2

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
      e.preventDefault(); // 새로고침 방지
      dispatch({
        type: 'CREATE',
        todo: {
          id: nextId.current,
          text: value,
          done: false
        }
      });
      setValue('');
      setOpen(false);
      nextId.current += 1;
  };


  return (
    <>
    {/* open이 true일때는 생성버튼클릭할때!. 
    그래야 초롤버튼클릭시 연결함수 onToggle로 open초기값false가 true가 됨 
     그때 InsertForm 그레이 컬러 input창 배경이 나타남*/}
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="해야할 일 입력 후 Enter "
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
  {/* onToggle은 open반전함수 open초기값이 false->true가되게!, 
    true일때 css 속성 45번라인 - 레드컬러단추에 rotate 효과 */}
      <CircleButton onClick={onToggle} open={open}> 
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;