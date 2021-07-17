import { NavLink } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

import styles from './NavigationListMobile.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';

const NavigationListMobile = ({onClose}) => {
  const [navListStyle, setNavListStyle] = useState(styles['nav-list']);

  useEffect(() => {
    setNavListStyle(prevState => `${prevState} ${styles.open}`);
  }, []);

  return (
    <div className={navListStyle}>
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