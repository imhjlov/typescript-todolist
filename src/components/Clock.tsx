import React, { useState } from 'react';
import styled from 'styled-components';
import { DATE_FORM } from 'utils/constants';

const Clock = () => {
  const [date] = useState(new Date().toLocaleDateString('kr-KR', DATE_FORM));

  return (
    <>
      <ClockWrapper>{date}</ClockWrapper>
    </>
  );
};

const ClockWrapper = styled.span`
  padding: 30px;
`;

export default React.memo(Clock);
