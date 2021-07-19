import styles from './SignupPage.module.scss';

import { Auth, Hub } from 'aws-amplify';
import Desktop from '../../hocs/desktop/Desktop';
import Mobile from '../../hocs/mobile/Mobile';
import SignUpFormMobile from '../../components/mobile-components/sign-up-form/SignupFormMobile';
import Card from '../../components/cross-components/card/Card';

const SignupPage = () => {

  const signupHandler = (userData) => {
    /**/
    console.log('sign up data ', userData);
    signUp(userData);
  }

  async function signUp(userData) {
    try {
      const { email, password, firstName, lastName } = userData;
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          name: `${firstName} ${lastName}`,
          email,
          family_name: lastName
        }
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  return (
    <Card>
      {/* <Desktop><SignUpFormDesktop /></Desktop> */}
      <Mobile><SignUpFormMobile onSignUp={signupHandler} /></Mobile>
      {/* <div>
      <p>User: {user ? JSON.stringify(user.attributes) : 'None'}</p>
      {user && <button onClick={() => Auth.signOut()}>Sign Out</button>}
      {!user && <button onClick={() => Auth.federatedSignIn({ provider: 'Google' })}>Federated Sign In</button>}
    </div> */}
    </Card>
  );
}

export default SignupPage;