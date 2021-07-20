import styles from './SignupPage.module.scss';

import Desktop from '../../hocs/desktop/Desktop';
import Mobile from '../../hocs/mobile/Mobile';
import SignUpFormMobile from '../../components/mobile-components/sign-up-form/SignupFormMobile';
import Card from '../../components/cross-components/card/Card';
import { signUp } from '../../services/user-service';

const SignupPage = () => {

  const signupHandler = async (userData) => {
    try {
      await signUp(userData);
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