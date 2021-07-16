import { Fragment } from 'react';
import Desktop from '../../../hocs/desktop/Desktop';
import Mobile from '../../../hocs/mobile/Mobile';
import NavBarDesktop from '../../desktop-components/nav-bar/NavBarDesktop';
import NavBarMobile from '../../mobile-components/nav-bar/NavBarMobile';

const NavBar = () => {
  return (
    <Fragment>
      <Mobile>
        <NavBarMobile />
      </Mobile>
      <Desktop>
        <NavBarDesktop />
      </Desktop>
    </Fragment>
  );
}

export default NavBar;