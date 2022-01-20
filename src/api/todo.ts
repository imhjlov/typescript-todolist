import axios from 'axios';
import { TodoType } from 'types';
import { END_POINT } from 'utils/constants';

export interface IResponse {
  msg: string;
  status: number;
  content?: string;
}

export const axiosCreate = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

export const getTodoAll = async () => {
  const response = await axiosCreate.get<TodoType>(`${END_POINT}`);
  return response;
};

export const addTodoAPI = async (content: string) => {
  const response = await axiosCreate.post<IResponse>(`${END_POINT}`, {
    content,
  });
  return response;
};

export const updateTodoAPI = async (id: number, content: string) => {
  const response = await axiosCreate.post<IResponse>(
    `${END_POINT}/${id}`,
    {
      content: content,
    },
    { headers: { 'x-mock-match-request-body': 'true' } },
  );
  return response;
};

export const deleteTodoAPI = async (id: number) => {
  const response = await axiosCreate.post<IResponse>(`${END_POINT}/${id}`, {
    headers: { 'x-mock-match-request-body': 'true' },
  });
  return response;
};
