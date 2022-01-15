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
  return { msg: response.data };
};

export const updateTodoAPI = async (id: number, content: string) => {
  const response = await axiosCreate.put<TodoType[]>(`${END_POINT}/${id}`, {
    content: content,
  });
  return { msg: response.data, result: response.data };
};

export const deleteTodoAPI = async (id: number) => {
  const response = await axiosCreate.delete<TodoType[]>(`${END_POINT}/${id}`);
  return { msg: response.data, result: id };
};
