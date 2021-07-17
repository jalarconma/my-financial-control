import { Fragment, useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import NavigationListMobile from '../navigation-list/NavigationListMobile';

import styles from './NavBarMobile.module.scss';

const NavBarMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuClickHandler = () => {
    setOpenMenu(prevState => !prevState);
  }

  return (
    <Fragment>
      <header className={styles.header}>
        {!openMenu && <GiHamburgerMenu className={styles['menu-icon']} onClick={menuClickHandler} />}
        <h1>My Financial Control</h1>
      </header>
      { openMenu && <NavigationListMobile onClose={menuClickHandler}/>}
    </Fragment>
  );
}

export default NavBarMobile;