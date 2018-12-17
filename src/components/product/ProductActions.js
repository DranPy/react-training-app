import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { Modal, ModalFooter, ModalBody } from '../modals';

class ProductActions extends Component {
  state = {
    isConfirmDeleteModal: false,
  };

  static propTypes = {
    productId: PropTypes.number,
    productName: PropTypes.string,
    onBuy: PropTypes.func,
    onDelete: PropTypes.func,
  };

  toggleModal = () => {
    this.setState(state => ({
      isConfirmDeleteModal: !state.isConfirmDeleteModal,
    }));
  };

  render() {
    const { productId, productName, onBuy, onDelete } = this.props;
    const { isConfirmDeleteModal } = this.state;

    return (
      <Fragment>
        <div className={`btn-group`}>
          <button onClick={onBuy} className="btn btn-primary" title="Buy">
            <FA icon="shopping-cart" />
          </button>
          <button onClick={this.toggleModal} className="btn btn-outline-primary" title="Remove">
            <FA icon="times-circle" />
          </button>
          <Link to={`/products/${productId}/edit`} className="btn btn-outline-primary" title="Edit">
            <FA icon="pen" />
          </Link>
        </div>
        <Modal
          header="Attention"
          theme={Modal.Theme.danger}
          isOpen={isConfirmDeleteModal}
          onRequestClose={this.toggleModal}
        >
          <ModalBody>
            Do you want delete <strong>{productName}</strong> product?
          </ModalBody>
          <ModalFooter>
            <div className="btn-group">
              <button className="btn btn-primary" onClick={() => onDelete(productId)}>
                Ok
              </button>
              <button className="btn btn-outline-primary" onClick={this.toggleModal}>
                Close
              </button>
            </div>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default ProductActions;
