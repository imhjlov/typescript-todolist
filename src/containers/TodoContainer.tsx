import TodoCreate from 'components/TodoCreate';
import { RootState } from 'modules';
import {
  createTodo,
  loadTodo,
  removeTodo,
  saveTodo,
  toggleTodo,
  updateTodo,
} from 'modules/actions/TodosAction';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Todo, TodosState } from 'types';

const TodoContainer: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const uncheckCount = todos.filter((todo) => !todo.isCheck);

  const onLoad = () => {
    dispatch(loadTodo());
  };
  const onSave = (Todos: TodosState) => {
    dispatch(saveTodo(Todos));
  };
  const onCreate = (Todo: Todo) => {
    dispatch(createTodo(Todo));
  };
  const onRemove = (id: string) => {
    dispatch(removeTodo(id));
  };
  const onUpdate = (Todo: Todo) => {
    dispatch(updateTodo(Todo));
  };
  const onToggle = (id: string) => {
    dispatch(toggleTodo(id));
  };

  return (
    <>
      <TodoUncheckCount>✨{uncheckCount.length} 개의 할 일이 있습니다✨</TodoUncheckCount>
      <TodoCreate onCreate={onCreate} />
    </>
  );
};

export default TodoContainer;

const TodoUncheckCount = styled.div`
  text-align: center;
  padding: 25px 0;
  color: #4b5489;
  font-weight: 600;
`;
