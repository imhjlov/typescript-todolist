import React from 'react';
import Clock from 'components/Clock';
import { ReactComponent as LogoSvg } from 'components/assets/svg/logo.svg';
import styled from 'styled-components';

const TodoHeader: React.FC = () => {
  return (
    <HeaderWrap>
      <LogoSvg />
      <Clock />
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  display: flex;
  margin: auto 0;
  justify-content: space-between;

  svg {
    margin: auto 0;
  }
`;

export default TodoHeader;
