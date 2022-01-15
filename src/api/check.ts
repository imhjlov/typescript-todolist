import { axiosCreate } from 'api/todo';
import { END_POINT } from 'utils/constants';

export const checkTodoAPI = async (id: number, isCheck: boolean) => {
  const response = await axiosCreate.put(`${END_POINT}/${id}`, {
    isCheck: isCheck,
  });
  return { msg: response.data };
};
