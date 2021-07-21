import { Auth } from 'aws-amplify';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { APP_ROUTES, AUTH_NAV_LINKS, GUESS_NAV_LINKS } from '../../../app-routes/routes';

import styles from './Navigation.module.scss';

const Navigation = () => {
  
  const signoutHandler = () => {
    Auth.signOut();
  }

  const isAuthUser = useSelector(state => state.user.value ? true : false);
  const links = isAuthUser ? AUTH_NAV_LINKS : GUESS_NAV_LINKS;

  const menuOptions = links.map(link => {
    let clickHandler;

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
    <nav>
      <ul>
        { menuOptions }
      </ul>
    </nav>
  );
}

export default Navigation;