import { LOAD_DATA, SAVE, CREATE, REMOVE, UPDATE, TOGGLE, TodosState, Todo } from 'types/index';

export const loadTodo = () => ({
  type: LOAD_DATA,
});

export const saveTodo = (Todos: TodosState) => ({
  type: SAVE,
  payload: Todos,
});

export const createTodo = (Todo: Todo) => ({
  type: CREATE,
  payload: Todo,
});

export const removeTodo = (id: string) => ({
  type: REMOVE,
  payload: id,
});

export const updateTodo = (Todo: Todo) => ({
  type: UPDATE,
  payload: Todo,
});

export const toggleTodo = (id: string) => ({
  type: TOGGLE,
  payload: id,
});

export type TodosAction =
  | ReturnType<typeof loadTodo>
  | ReturnType<typeof saveTodo>
  | ReturnType<typeof createTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof updateTodo>
  | ReturnType<typeof toggleTodo>;
