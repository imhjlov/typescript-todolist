import TodoCreate from 'components/TodoCreate';
import TodoList from 'components/todoList/TodoList';
import { RootState } from 'modules';
import { createTodo, loadTodo } from 'modules/actions/TodosAction';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Todo } from 'types';

const TodoContainer: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const uncheckCount = todos.filter((todo) => !todo.isCheck);

  const onLoad = () => {
    dispatch(loadTodo());
  };
  const onCreate = (Todo: Todo) => {
    dispatch(createTodo(Todo));
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <>
      <TodoUncheckCount>✨{uncheckCount.length} 개의 할 일이 있습니다✨</TodoUncheckCount>
      <TodoCreate onCreate={onCreate} />
      <TodoList todos={todos} />
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
