import React from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const ModalOverlay = props => {
  return <div className={classes['modal__overlay']} />;
};
const ModalContent = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes['modal__content']}>{children}</div>
    </div>
  );
};

const Modal = ({ children }) => {
  return (
    <>
      {createPortal(<ModalOverlay />, document.getElementById('modal'))}
      {createPortal(
        <ModalContent>{children}</ModalContent>,
        document.getElementById('modal')
      )}
    </>
  );
};

export default Modal;
