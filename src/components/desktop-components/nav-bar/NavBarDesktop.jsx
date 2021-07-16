import Navigation from '../../cross-components/navigation/Navigation';
import styles from './NavBarDesktop.module.scss';

const NavBarDesktop = () => {
  return (
    <header className={styles.header}>
      <h1>My Financial Control</h1>
      <Navigation />
    </header>
  );
}

export default NavBarDesktop;