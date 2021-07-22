import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import styles from './Overlay.module.scss';


const Overlay = ({children, className}) => {
  const overlayStyles = `${styles.overlay} ${className ? styles[className] : ''}`;
  return <div className={overlayStyles}>{children}</div>
}

const OverlayPortal = ({children, className}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Overlay className={className}>{children}</Overlay>, document.getElementById('overlay-root'))}
    </Fragment>
  );
}

export default OverlayPortal