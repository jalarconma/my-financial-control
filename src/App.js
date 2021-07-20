import styles from './App.module.scss';

import { Route, Switch } from 'react-router-dom';
import { APP_ROUTES } from './app-routes/routes';
import { ROUTE_TYPE } from './app-routes/route-type';

import WelcomePage from './pages/welcome/WelcomePage';
import SigninPage from './pages/signin/SigninPage';
import HomePage from './pages/home/HomePage';
import MyAccountPage from './pages/my-account/MyAccountPage';
import SignupPage from './pages/signup/SignupPage';

import NavBar from './components/cross-components/nav-bar/NavBar';
import AuthRoute from './components/cross-components/auth-route/AuthRoute';

import useUser from './hooks/use-user';

function App() {
  useUser();

  return (
    <div className={styles.app}>
      <div className={styles['header-container']}>
        <NavBar />
      </div>
      <div className={styles['body-container']}>
        <Switch>
          <Route path="/" exact>
            <WelcomePage />
          </Route>
          <AuthRoute path={APP_ROUTES.SIGNIN} type={ROUTE_TYPE.PUBLIC}>
            <SigninPage />
          </AuthRoute>
          <AuthRoute path={APP_ROUTES.SIGNUP} type={ROUTE_TYPE.PUBLIC}>
            <SignupPage />
          </AuthRoute>
          <AuthRoute path={APP_ROUTES.SIGNOUT} type={ROUTE_TYPE.PRIVATE} />
          <AuthRoute path={APP_ROUTES.HOME} type={ROUTE_TYPE.PRIVATE}>
            <HomePage />
          </AuthRoute>
          <AuthRoute path={APP_ROUTES.MY_ACCOUNT} type={ROUTE_TYPE.PRIVATE}>
            <MyAccountPage />
          </AuthRoute>
        </Switch>
      </div>
    </div>
  );
}

export default App;
