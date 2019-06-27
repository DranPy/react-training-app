import React from 'react';
import PropTypes from 'prop-types';

import { Modal, ModalBody, ModalFooter, ModalHeader } from './index';

const ModalAlert = ({ children, header, onAccept, onRequestClose, ...rest }) => {
  return (
    <Modal onRequestClose={onRequestClose} theme={Modal.Theme.info} {...rest}>
      <ModalHeader onRequestClose={onRequestClose}>{header}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={onAccept || onRequestClose}>
          Ok
        </button>
      </ModalFooter>
    </Modal>
  );
};

ModalAlert.propTypes = {
  header: PropTypes.string,
  onAccept: PropTypes.func,
  onRequestClose: PropTypes.func,
};

ModalAlert.defaultProps = {
  header: 'Info',
};

export default ModalAlert;
