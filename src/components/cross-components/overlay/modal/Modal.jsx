import OverlayPortal from '../Overlay';
import Card from '../../card/Card';

import styles from './Modal.module.scss';

const Modal = ({ className, children }) => {
  const modalStyles = `${styles.modal} ${className ? styles[className] : ''}`;

  return (
    <OverlayPortal className={'align-center'}>
      <div className={modalStyles}>
        {children}
      </div>
    </OverlayPortal>
  );
}

export default Modal;