import React from 'react';

import './ModalFooter.css';

const ModalFooter = ({ children, ...rest }) => {
  return (
    <div className="ReactModal__Footer" {...rest}>
      {children}
    </div>
  );
};

export default ModalFooter;
