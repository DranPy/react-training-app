import React from 'react';

import './ModalBody.scss';

const ModalBody = ({ children, ...rest }) => {
  return (
    <div className="ReactModal__Body" {...rest}>
      {children}
    </div>
  );
};

export default ModalBody;
