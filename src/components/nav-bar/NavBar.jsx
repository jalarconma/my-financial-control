import Navigation from '../navigation/Navigation';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <header className={styles.header}>
      <h1>My Financial Control</h1>
      <Navigation />
    </header>
  );
}

export default NavBar;