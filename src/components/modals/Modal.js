import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import cn from 'classnames';

import ModalHeader from './ModalHeader';

import './Modal.scss';

ReactModal.setAppElement('#root');

class Modal extends Component {
  static Theme = {
    default: 'default',
    warning: 'warning',
    danger: 'danger',
    info: 'info',
  };

  static WidthMode = {
    default: 'default',
    wide: 'wide',
    narrow: 'narrow',
  };

  static HeightMode = {
    top: 'top',
    center: 'center',
    fullFill: 'full-fill',
  };

  static propTypes = {
    theme: PropTypes.string,
    widthMode: PropTypes.string,
    header: PropTypes.string,
  };

  static defaultProps = {
    theme: Modal.Theme.default,
    widthMode: Modal.WidthMode.default,
    heightMode: Modal.HeightMode.center,
  };

  render() {
    const { children, theme, widthMode, heightMode, header, onRequestClose, ...rest } = this.props;

    return (
      <ReactModal
        className={cn({
          [`ReactModal__Content--theme-${theme}`]: theme,
          [`ReactModal__Content--width-mode-${widthMode}`]: widthMode,
        })}
        overlayClassName={cn('ReactModal__Overlay-default', {
          [`ReactModal__Overlay--height-mode-${heightMode}`]: heightMode,
        })}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={onRequestClose}
        {...rest}
      >
        {header && <ModalHeader onRequestClose={onRequestClose}>{header}</ModalHeader>}
        {this.props.children}
      </ReactModal>
    );
  }
}

export default Modal;
