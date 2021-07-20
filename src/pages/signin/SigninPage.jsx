import styles from './SigninPage.module.scss';

import SignInFormMobile from '../../components/mobile-components/sign-in-form/SignInFormMobile';
import Card from '../../components/cross-components/card/Card';
import Mobile from '../../hocs/mobile/Mobile';
import { signIn } from '../../services/user-service';

const SigninPage = () => {

  const signinHandler = async (userData) => {
    try {
      await signIn(userData);
    } catch(error) {
      console.log('error signing in:', error);
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