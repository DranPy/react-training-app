import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Modal.css';

ReactModal.setAppElement('#root');

class Modal extends Component {
  static Theme = {
    default: 'default',
    primary: 'primary',
  };

  static WidthMode = {
    default: 'default',
    wide: 'wide',
    narrow: 'narrow',
  };

  static propTypes = {
    theme: PropTypes.string,
    widthMode: PropTypes.string,
    header: PropTypes.string,
  };

  static defaultProps = {
    theme: Modal.Theme.default,
    widthMode: Modal.WidthMode.default,
  };

  render() {
    const { children, theme, widthMode, header, onRequestClose, ...props } = this.props;

    const modalClass = classnames({
      [`ReactModal__Content--${theme}`]: theme,
      [`ReactModal__Content--width-mode-${widthMode}`]: widthMode,
    });

    return (
      <ReactModal
        className={modalClass}
        overlayClassName={`ReactModal__Overlay--${theme}`}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={onRequestClose}
        {...props}
      >
        {header && (
          <div className="ReactModal__Header">
            {header}
            <button className="close" onClick={onRequestClose}>
              &times;
            </button>
          </div>
        )}
        {this.props.children}
      </ReactModal>
    );
  }
}

export default Modal;
