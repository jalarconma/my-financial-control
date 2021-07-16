import { NavLink } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

import styles from './NavigationListMobile.module.scss';
import { Fragment } from 'react';

const NavigationListMobile = ({onClose}) => {
  return (
    <div className={styles['nav-list']}>
      <div className={styles['nav-list__close']}>
        <IoMdClose className={styles['nav-list__close__icon']} onClick={onClose}/>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/signin">Sign In</NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/signup">Sign Up</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );

}

export default NavigationListMobile;