import React from 'react';
import PropTypes from 'prop-types';

import './ModalHeader.scss';

const ModalHeader = ({ children, onRequestClose, ...rest }) => {
  return (
    <div className="ReactModal__Header" {...rest}>
      {children}
      {onRequestClose && (
        <button className="close" onClick={onRequestClose}>
          &times;
        </button>
      )}
    </div>
  );
};

ModalHeader.propTypes = {
  onRequestClose: PropTypes.func,
};

export default ModalHeader;
