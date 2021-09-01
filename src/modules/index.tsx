import { combineReducers } from 'redux';
import todos from './reducers/TodosReducer';

const rootReducer = combineReducers({ todos });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
