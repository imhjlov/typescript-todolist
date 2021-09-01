import React from 'react';
import TodoContainer from 'containers/TodoContainer';
import TodoHeader from 'components/TodoHeader';
import { layouts as S } from 'styles/layouts';

const App: React.FC = () => {
  return (
    <div>
      <S.Wrap>
        <S.Header>
          <TodoHeader />
        </S.Header>
        <S.Body>
          <S.Main>
            <S.Section>
              <TodoContainer />
            </S.Section>
          </S.Main>
        </S.Body>
      </S.Wrap>
    </div>
  );
};

export default App;
