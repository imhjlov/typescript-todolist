import axios from 'axios';
import { TodoType } from 'types';
import { END_POINT } from 'utils/constants';

export const axiosCreate = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

export const getTodoAll = async () => {
  const response = await axiosCreate.get<TodoType[]>(`${END_POINT}`);
  return { result: response.data };
};

export const addTodoAPI = async (todo: TodoType) => {
  const response = await axiosCreate.post<TodoType[]>(`${END_POINT}`, {
    ...todo,
  });
  return { msg: response.data.msg };
};

export const updateTodoAPI = async (todo: TodoType) => {
  const response = await axiosCreate.put<TodoType[]>(`${END_POINT}/${todo.id}`, {
    id: todo.id,
    content: todo.content,
  });
  return { msg: response.data.msg, result: response.content };
};

export const deleteTodoAPI = async (id: number) => {
  const response = await axiosCreate.delete<TodoType[]>(`${END_POINT}/${id}`);
  return { msg: response.data.msg, result: id };
};
