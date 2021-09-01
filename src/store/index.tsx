import { combineReducers } from 'redux';
import reducer from 'store/reducers/index';

const rootStore = combineReducers({ reducer });

export type RootState = ReturnType<typeof rootStore>;

export default rootStore;
