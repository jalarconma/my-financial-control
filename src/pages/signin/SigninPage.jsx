import styles from './SigninPage.module.scss';

import { Auth } from 'aws-amplify';

import SignInFormMobile from '../../components/mobile-components/sign-in-form/SignInFormMobile';
import Card from '../../components/cross-components/card/Card';
import Mobile from '../../hocs/mobile/Mobile';

const SigninPage = () => {
  const signinHandler = (userData) => {
    console.log('sign in data ', userData);
    signIn(userData);
  }

  async function signIn(userData) {
    try {
      const { email, password} = userData;
      const { user } = await Auth.signIn({
        username: email,
        password
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  return (
    <Card>
      {/* <Desktop><SignInFormDesktop /></Desktop> */}
      <Mobile><SignInFormMobile onSignIn={signinHandler} /></Mobile>
    </Card>
  );
}

export default SigninPage;