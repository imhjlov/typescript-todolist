import { TodoType, TodosState } from 'types/index';

const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data && JSON.parse(data);
};

const setLocalStorage = (key: string, value: string | TodosState) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const getUserId = () => {
  return getLocalStorage('user_id');
};

export const setUserId = (value: string) => {
  setLocalStorage('user_id', value);
};

export const logOutUser = () => {
  removeLocalStorage('user_id');
};

export const getTodoStorage = () => {
  return getLocalStorage('todos');
};

export const saveTodoStorage = (todos: TodosState) => {
  setLocalStorage('todos', todos);
};

export const removeTodoStorage = (id: string) => {
  const todos = getTodoStorage();
  const newTodos = todos.filter((todo: TodoType) => todo.id !== id);
  saveTodoStorage(newTodos);
  return newTodos;
};
