import styles from './App.module.scss';

import { API, Auth, Hub } from 'aws-amplify';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from './store/user-slice';
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

import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';

function App() {
  const dispatch = useDispatch();

  const setUserHandler = (userData) => {
    let userInfo = null;

    if (userData) {
      userInfo = {
        ...userData.attributes,
      }
    }

    storeUser(userInfo);
  }

  async function storeUser(userInfo) {
    try {
      let userData = null;
      if (userInfo) {
        console.log('user info: ', userInfo);
        const prevUserResponse = await API.graphql({ query: queries.listUsers, variables: { email: userInfo.email }});
        const [ prevUser ] = prevUserResponse.data.listUsers.items;
  
        if(!prevUser) {
          const toCreateUser = {
            email: userInfo.email,
            firstName: userInfo.name.split(" ")[0],
            lastName: userInfo.family_name
          };

          userData = await API.graphql({ query: mutations.createUser, variables: {input: toCreateUser}});
          console.log('created user: ', userData);
        } else {
          userData = prevUser;
          console.log('prev user: ', userData);
        }
  
      }

      dispatch(userActions.setUser(userData));
    } catch(e) {
      console.log('store error: ', e);
    }
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
