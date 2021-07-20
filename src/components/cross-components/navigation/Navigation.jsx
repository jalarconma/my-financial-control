import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AUTH_NAV_LINKS, GUESS_NAV_LINKS } from '../../../app-routes/routes';

import styles from './Navigation.module.scss';

const Navigation = () => {
  const isAuthUser = useSelector(state => state.user.value ? true : false);
  const links = isAuthUser ? AUTH_NAV_LINKS : GUESS_NAV_LINKS;

  const menuOptions = links.map(link => {
    return (
      <li key={link.route}>
        <NavLink activeClassName={styles.active} to={link.route}>{link.title}</NavLink>
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