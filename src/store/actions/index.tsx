import * as types from 'constants/index';
import { TodoData } from 'types/index';

export const loadTodoStart = () => ({
  type: types.LOAD_TODO_START,
});

export const loadTodoList = (data: Promise<TodoData>) => ({
  type: types.LOAD_TODO,
  payload: data,
});

export const addTodo = (value: string) => ({
  type: types.ADD_TODO,
  payload: value,
});

export const deleteTodo = (id: string) => ({
  type: types.DELETE_TODO,
  payload: id,
});

export const updateTodo = (id: string, value: string) => ({
  type: types.UP_DATE_TODO,
  payload: {
    id,
    value,
  },
});

export type ActionTypes =
  | ReturnType<typeof loadTodoStart>
  | ReturnType<typeof loadTodoList>
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof updateTodo>;
