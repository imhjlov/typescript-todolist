import React from 'react';
import TodoItem from 'components/todoList/TodoItem';
import { removeTodo, toggleTodo, updateTodo } from 'modules/actions/TodosAction';
import { Todo, TodosState } from 'types';
import { useDispatch } from 'react-redux';

interface TodoListProps {
  todos: TodosState;
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const dispatch = useDispatch();

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
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onUpdate={onUpdate}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default React.memo(TodoList);
