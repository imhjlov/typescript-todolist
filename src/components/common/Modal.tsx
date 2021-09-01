import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  modalOpen: boolean;
  handleToggle: () => void;
  children?: JSX.Element;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, children, handleToggle }) => {
  return (
    <>
      {modalOpen && (
        <ModalWrapper onClick={() => handleToggle()}>
          <div>
            {children}
            <button onClick={handleToggle}>확인</button>
          </div>
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.3);

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 50%;
    height: 30%;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    z-index: 2001;
    background: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
  }

  button {
    width: 60px;
    height: 30px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    color: #ffffff;
    &:hover {
      background-color: #4b5489;
      cursor: pointer;
    }
  }
`;
