import { NavLink } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

import styles from './NavigationListMobile.module.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { APP_ROUTES, AUTH_NAV_LINKS, GUESS_NAV_LINKS } from '../../../app-routes/routes';
import { Auth } from 'aws-amplify';

const NavigationListMobile = ({onClose}) => {
  const [navListStyle, setNavListStyle] = useState(styles['nav-list']);

  useEffect(() => {
    setNavListStyle(prevState => `${prevState} ${styles.open}`);
  }, []);

  const signoutHandler = () => {
    Auth.signOut();
    clickMenuItemHandler();
  }

  const clickMenuItemHandler = () => {
    onClose();
  }

  const isAuthUser = useSelector(state => state.user.value ? true : false);
  const links = isAuthUser ? AUTH_NAV_LINKS : GUESS_NAV_LINKS;

  const menuOptions = links.map(link => {
    let clickHandler = clickMenuItemHandler;

    if(link.route === APP_ROUTES.SIGNOUT) {
      clickHandler = signoutHandler;
    }

    return (
      <li key={link.route}>
        <NavLink activeClassName={styles.active} to={link.route} onClick={clickHandler}>{link.title}</NavLink>
      </li>
    )
  });

  return (
    <div className={navListStyle}>
      <div className={styles['nav-list__close']}>
        <IoMdClose className={styles['nav-list__close__icon']} onClick={onClose}/>
      </div>
      <nav>
        <ul>
          { menuOptions }
        </ul>
      </nav>
    </div>
  );

}

export default NavigationListMobile;