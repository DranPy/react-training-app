import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

class ProductActions extends Component {
  state = {
    isConfirmDeleteModal: false,
  };

  static propTypes = {
    onBuy: PropTypes.func,
    onDelete: PropTypes.func,
  };

  toggleModal = () => {
    this.setState(state => ({
      isConfirmDeleteModal: !state.isConfirmDeleteModal,
    }));
  };

  render() {
    const { id, onBuy, onDelete } = this.props;
    const { isConfirmDeleteModal } = this.state;

    return (
      <Fragment>
        <div className={`btn-group ${this.props.className}`}>
          <button onClick={onBuy} className="btn btn-primary" title="Buy">
            <FA icon="shopping-cart" />
          </button>
          <button onClick={this.toggleModal} className="btn btn-outline-primary" title="Remove">
            <FA icon="times-circle" />
          </button>
          <Link to={`/products/${id}/edit`} className="btn btn-outline-primary" title="Edit">
            <FA icon="pen" />
          </Link>
        </div>
        <Modal isOpen={isConfirmDeleteModal} contentLabel={'Test header'}>
          <div>Do you want delete this product?</div>
          <button className="btn btn-default" onClick={() => onDelete(id)}>
            Ok
          </button>
          <button className="btn btn-default" onClick={this.toggleModal}>
            Close
          </button>
        </Modal>
      </Fragment>
    );
  }
}

export default ProductActions;
