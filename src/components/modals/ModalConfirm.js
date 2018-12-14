import React from 'react';
import PropTypes from 'prop-types';

import { Modal, ModalFooter, ModalHeader } from './index';

const ModalConfirm = ({ children, header, onAccept, onReject, onRequestClose, ...rest }) => {
  return (
    <Modal onRequestClose={onRequestClose} theme={Modal.Theme.danger} {...rest}>
      <ModalHeader onRequestClose={onRequestClose}>{header}</ModalHeader>
      {children}
      <ModalFooter>
        <div className="btn-group">
          <button className="btn btn-primary" onClick={onAccept || onRequestClose}>
            Ok
          </button>
          <button className="btn btn-outline-primary" onClick={onReject || onRequestClose}>
            Cancel
          </button>
        </div>
      </ModalFooter>
    </Modal>
  );
};

ModalConfirm.propTypes = {
  header: PropTypes.string,
  onAccept: PropTypes.func,
  onReject: PropTypes.func,
  onRequestClose: PropTypes.func,
};

ModalConfirm.defaultProps = {
  header: 'Attention',
};

export default ModalConfirm;
