import './App.css';

import { Auth, Hub } from 'aws-amplify';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from './store/user-slice';
import { Route, Switch } from 'react-router-dom';
import { APP_ROUTES } from './app-routes/routes';
import { ROUTE_TYPE } from './app-routes/route-type';

import WelcomePage from './pages/welcome/WelcomePage';
import SigninPage from './pages/signin/SigninPage';
import HomePage from './pages/home/HomePage';
import MyAccountPage from './pages/my-account/MyAccountPage';
import SignupPage from './pages/signup/SignupPage';

import NavBar from './components/nav-bar/NavBar';
import AuthRoute from './components/auth-route/AuthRoute';

function App() {
  const user = useSelector(state => state.user.value);
  const dispatch = useDispatch();

  const setUserHandler = (userData) => {
    dispatch(userActions.setUser(userData));
  }

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUserHandler(userData));
          break;
        case 'signOut':
          setUserHandler(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
        default:
          break;
      }
    });

    getUser().then(userData => setUserHandler(userData));

  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }

  return (
    <Fragment>
      <NavBar />
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
    </Fragment>
    // <div>
    //   <p>User: {user ? JSON.stringify(user.attributes) : 'None'}</p>
    //   {user && <button onClick={() => Auth.signOut()}>Sign Out</button>}
    //   {!user && <button onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Federated Sign In</button>}
    // </div>
  );
}

export default App;
