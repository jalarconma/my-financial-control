import useForm from '../../../hooks/use-form/use-form';
import Button from '../../cross-components/button/Button';
import validate from '../../utils/signup-validations';
import styles from './SignUpFormDesktop.module.scss';

const SignUpFormDesktop = ({onSignUp}) => {
  const {
    formState,
    inputChangeHandler,
    inputBlurHandler,
    submitHandler } = useForm({ email: '', firstName: '', lastName: '', password: ''}, onSignUp, validate);

  const { inputs } = formState;

  const showFirstNameError = !inputs.firstName.isValid && inputs.firstName.touched;
  const showLastNameError = !inputs.lastName.isValid && inputs.lastName.touched;
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
        <div className={styles['form-control']}>
          <label htmlFor='firstName'>First Name</label>
          <input required type='text' id='firstName' name='firstName' value={inputs.firstName.value} onChange={inputChangeHandler} onBlur={inputBlurHandler} />
          {showFirstNameError && <p className={styles['error-text']}>{inputs.firstName.errors}</p>}
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='lastName'>Last Name</label>
          <input required type='text' id='lastName' name='lastName' value={inputs.lastName.value} onChange={inputChangeHandler} onBlur={inputBlurHandler} />
          {showLastNameError && <p className={styles['error-text']}>{inputs.lastName.errors}</p>}
        </div>
      </div>
      <div className={styles['form-actions']}>
        <Button type='submit' disabled={!formState.isValid}>Submit</Button>
      </div>
    </form>
  );
}

export default SignUpFormDesktop;