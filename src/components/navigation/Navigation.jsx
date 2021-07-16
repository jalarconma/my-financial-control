import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
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
  );
}

export default Navigation;