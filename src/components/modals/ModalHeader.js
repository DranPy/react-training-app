import React from 'react';
import PropTypes from 'prop-types';

import './ModalHeader.scss';

const ModalHeader = ({ children, onRequestClose, shouldDisplayCloseButton, ...rest }) => {
  return (
    <div className="ReactModal__Header" {...rest}>
      {children}
      {shouldDisplayCloseButton && (
        <button className="close" onClick={onRequestClose}>
          &times;
        </button>
      )}
    </div>
  );
};

ModalHeader.propTypes = {
  onRequestClose: PropTypes.func,
  shouldDisplayCloseButton: PropTypes.bool,
};

export default ModalHeader;
