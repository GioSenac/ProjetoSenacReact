import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

const ModalContainer = styled.div`
    background: #620A59;
    padding: 9%;
    padding-right: 34%;
    border-radius: 5%;
    z-index: 20;
`;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <span onClick={onClose} style={{ cursor: 'pointer', fontSize: '20px', float: 'right', position: 'absolute', left: '69%', top: '34%'}}>
          &times;
        </span>
        {children}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;