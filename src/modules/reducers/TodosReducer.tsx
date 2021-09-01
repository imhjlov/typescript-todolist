import { TodosAction } from 'modules/actions/TodosAction';
import { LOAD_DATA, CREATE, REMOVE, UPDATE, TOGGLE, TodosState, Todo } from 'types/index';
import { getTodoStorage, removeTodoStorage, saveTodoStorage } from 'utils/localStorage';

export const initialState: TodosState = [];
export let nextIdState: number = 0;
export const increamentNextId = () => {
  nextIdState = nextIdState + 1;
};

function todos(state: TodosState = initialState, action: TodosAction): TodosState {
  switch (action.type) {
    case LOAD_DATA:
      const initialTodos = getTodoStorage() || [];
      if (initialTodos && initialTodos.length >= 1) {
        nextIdState = initialTodos[initialTodos.length - 1].id;
      }
      saveTodoStorage(initialTodos);
      return initialTodos;
    case CREATE:
      const nextId = String(nextIdState + 1);
      const newState = state.concat({ ...action.payload, id: nextId });
      saveTodoStorage(newState);
      return newState;
    case REMOVE:
      removeTodoStorage(action.payload);
      return state.filter((todo) => todo.id !== action.payload);
    case UPDATE:
      const index = state.findIndex((item) => item.id === action.payload.id);
      const newTodoList = [...state];
      newTodoList.splice(index, 1, action.payload);
      saveTodoStorage(newTodoList);
      return newTodoList;
    case TOGGLE:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isCheck: !todo.isCheck } : todo,
      );
    default:
      return state;
  }
}

export default todos;
