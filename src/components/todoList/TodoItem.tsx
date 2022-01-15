import React, { useRef, useState, useEffect } from 'react';
import { ReactComponent as DeleteSvg } from 'components/assets/svg/delete.svg';
import { ReactComponent as EditSvg } from 'components/assets/svg/edit.svg';
import { ReactComponent as CheckSvg } from 'components/assets/svg/check.svg';
import { TodoType } from 'types';
import styled, { css } from 'styled-components';

interface TodoItemProps {
  todo: TodoType;
  onRemove: (id: string) => void;
  onUpdate: (Todo: TodoType) => void;
  onToggle: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemove, onUpdate, onToggle }) => {
  const [isEdit, setIsEdit] = useState(false);
  const taskNameRef = useRef(null);

  //수정 버튼을 누르면 입력창으로 focus가 됩니다.
  useEffect(() => {
    const updateTasKName = taskNameRef.current! as HTMLElement;
    if (updateTasKName) updateTasKName.focus();
  }, [isEdit]);

  //수정 확인 버튼을 누르면 실행되는 함수입니다.
  //수정하고, 입력값이 있어야 수정 됩니다.
  const handleEdit = () => {
    const updateTasKName = taskNameRef.current! as HTMLElement;
    const updateText = updateTasKName.innerText;

    if (isEdit && updateText !== '') {
      const updateTodo: TodoType = {
        id: todo.id,
        content: updateText ? updateText : todo.content,
        isCheck: todo.isCheck,
        createdAt: todo.createdAt,
      };
      onUpdate(updateTodo);
    }
    setIsEdit((prev) => !prev);
  };

  //삭제할때 한 번 확인 하고 삭제합니다.
  const handleRemove = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) onRemove(todo.id);
  };

  //완료를 체크합니다.
  const handleComplete = () => {
    onToggle(todo.id);
  };

  return (
    <>
      <TodoItemWrapper draggable>
        <ContentWrap>
          <CheckButton isCheck={todo.isCheck} onClick={handleComplete} />
          <TodoName
            ref={taskNameRef}
            contentEditable={isEdit}
            suppressContentEditableWarning={true}
            isCheck={todo.isCheck}
          >
            {todo.content}
          </TodoName>
          <ButtonWrap>
            {isEdit ? <CheckSvg onClick={handleEdit} /> : <EditSvg onClick={handleEdit} />}
            <DeleteSvg onClick={handleRemove} />
          </ButtonWrap>
        </ContentWrap>

        <DateWrap>
          <DateStyle>등록일 {String(todo.createdAt).split('T')[0]}</DateStyle>
        </DateWrap>
      </TodoItemWrapper>
    </>
  );
};

export default TodoItem;

const TodoItemWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
  padding: 25px 20px;
  border-radius: 10px;
  background-color: #ffffff;
  cursor: pointer;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
`;

const ContentWrap = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const CheckButton = styled.div<{ isCheck: boolean }>`
  flex: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #4b5489;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    border: 3px solid #119955;
  }
  ${(props) =>
    props.isCheck &&
    css`
      border: 10px solid #dddddd;
      color: #dddddd;
      &:hover {
        border: 3px solid #aaaaaa;
      }
    `}
`;

const TodoName = styled.div<{ isCheck: boolean }>`
  flex: none;
  width: 40%;
  margin-bottom: 8px;
  padding: 2px;
  font-size: 1rem;
  font-weight: 600;
  color: #4b5489;

  ${(props) =>
    props.isCheck &&
    css`
      color: #dddddd;
      text-decoration: line-through;
    `}
`;

const ButtonWrap = styled.div`
  margin-left: auto;
  svg + svg {
    margin-left: 5px;
    margin-right: 3px;
  }
  svg {
    fill: #aaaaaa;
    &:hover {
      fill: #4b5489;
    }
  }
`;

const DateWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  bottom: 0;
  margin-bottom: 10px;
  font-size: 0.8rem;
  color: #333333;
`;

const DateStyle = styled.span`
  margin-right: 5px;
  padding: 2px;
  border-radius: 5px;
  font-size: 0.8rem;
  color: #777777;
`;
