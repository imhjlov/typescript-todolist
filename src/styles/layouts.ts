import styled from 'styled-components';

export const layouts = {
  Wrap: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,

  Header: styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    margin-bottom: 30px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    z-index: 10;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    span {
      white-space: nowrap;
    }
  `,

  Body: styled.div`
    width: 100%;
    margin-top: 80px;
  `,

  Main: styled.main`
    width: 50%;
    margin: 0 auto;
    padding: 50px 0;
  `,

  Section: styled.section`
    padding: 15px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  `,
};
