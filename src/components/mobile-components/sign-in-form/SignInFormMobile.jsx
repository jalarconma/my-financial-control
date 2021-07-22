import useForm from '../../../hooks/use-form/use-form';
import Button from '../../cross-components/button/Button';
import validate from '../../utils/signup-validations';
import styles from './SignInFormMobile.module.scss';

const SignInFormMobile = ({onSignIn}) => {
  const {
    formState,
    inputChangeHandler,
    inputBlurHandler,
    submitHandler } = useForm({ email: '', password: ''}, onSignIn, validate);

  const { inputs } = formState;

  const showEmailError = !inputs.email.isValid && inputs.email.touched;
  const showPasswordError = !inputs.password.isValid && inputs.password.touched;
  return (
    <form onSubmit={submitHandler}>
      <div className={styles['control-group']}>
        <div className={styles['form-control']}>
          <label htmlFor='email'>E-Mail Address</label>
          <input required type='text' id='email' name='email' value={inputs.email.value} onChange={inputChangeHandler} onBlur={inputBlurHandler} />
          {showEmailError && <p className={styles['error-text']}>{inputs.email.errors}</p>}
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='password'>Password</label>
          <input required type='password' id='password' name='password' value={inputs.password.value} onChange={inputChangeHandler} onBlur={inputBlurHandler} />
          {showPasswordError && <p className={styles['error-text']}>{inputs.password.errors}</p>}
        </div>
      </div>
      <div className={styles['form-actions']}>
        <Button type='submit' disabled={!formState.isValid}>Submit</Button>
      </div>
    </form>
  );
}

export default SignInFormMobile;