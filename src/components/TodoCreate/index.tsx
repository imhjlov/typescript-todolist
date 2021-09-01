import React, { useState } from 'react';
import { Todo } from 'types';
import Modal from 'components/common/Modal';
import styled from 'styled-components';
import { DATE_FORM } from 'utils/constants';
import { increamentNextId, nextIdState } from 'modules/reducers/TodosReducer';

interface TodoCreateProps {
  onCreate: (Todo: Todo) => void;
}

const TodoCreate: React.FC<TodoCreateProps> = ({ onCreate }) => {
  const [inputTask, setInputTask] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [date] = useState(new Date().toLocaleDateString('kr-KR', DATE_FORM));

  const handleSave = () => {
    handleCreate();
  };

  const handleCreate = () => {
    if (inputTask === '') {
      handleToggle();
      return;
    }
    const todo: Todo = {
      id: String(nextIdState),
      content: inputTask,
      isCheck: false,
      createdAt: date,
    };
    onCreate(todo);
    increamentNextId();
    setInputTask('');
  };

  const handleToggle = () => {
    setModalOpen(!modalOpen);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value);
  };

  return (
    <>
      <TodoCreateForm onSubmit={handleSave}>
        <TodoName>
          <label htmlFor="taskName">할 일</label>
          <input
            onChange={(e) => onChange(e)}
            type="text"
            placeholder="할 일을 적어주세요"
            name="taskName"
            value={inputTask}
          />
        </TodoName>
        <TodoControl>
          <button type="button" onClick={handleSave}>
            저장
          </button>
        </TodoControl>
      </TodoCreateForm>
      <Modal modalOpen={modalOpen} handleToggle={handleToggle}>
        <p>내용을 입력해 주세요📝</p>
      </Modal>
    </>
  );
};

const TodoCreateForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #4b5489;
  background-color: rgba(171, 184, 213, 0.8);
  margin-bottom: 15px;
  padding: 25px 15px;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
`;
const TodoName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  label {
    width: 20%;
    font-weight: 600;
    text-align: center;
  }
  input {
    width: 75%;
    border-radius: 5px;
    height: 30px;
  }
`;

const TodoControl = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;

  button {
    width: 60px;
    height: 30px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    color: #ffffff;
    &:hover {
      background-color: #4b5489;
      cursor: pointer;
    }
  }
`;
export default TodoCreate;
