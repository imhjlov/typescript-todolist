import React from 'react';
import TodoList from 'components/TodoList/index';

const App: React.FC<any> = () => {
  return (
    <div className="App">
      <h1>TodoList</h1>
      <TodoList />
    </div>
  );
};
export default App;
