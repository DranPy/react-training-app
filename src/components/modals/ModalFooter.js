import React from 'react';

import './ModalFooter.scss';

const ModalFooter = ({ children, ...rest }) => {
  return (
    <div className="ReactModal__Footer" {...rest}>
      {children}
    </div>
  );
};

export default ModalFooter;
