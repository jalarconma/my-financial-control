import useForm from '../../../hooks/use-form';
import styles from './SignupFormMobile.module.scss';

const SignUpFormMobile = ({onSignUp}) => {
  const {
    formState,
    inputChangeHandler,
    inputBlurHandler,
    submitHandler } = useForm({ email: '', firstName: '', lastName: '', password: ''}, onSignUp);

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
          <input type='text' id='email' name='email' value={inputs.email.value} onChange={inputChangeHandler} onBlur={inputBlurHandler} />
          {showEmailError && <p className={styles['error-text']}>{inputs.email.errors}</p>}
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password' value={inputs.password.value} onChange={inputChangeHandler} onBlur={inputBlurHandler} />
          {showPasswordError && <p className={styles['error-text']}>{inputs.password.errors}</p>}
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName' name='firstName' value={inputs.firstName.value} onChange={inputChangeHandler} onBlur={inputBlurHandler} />
          {showFirstNameError && <p className={styles['error-text']}>{inputs.firstName.errors}</p>}
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' name='lastName' value={inputs.lastName.value} onChange={inputChangeHandler} onBlur={inputBlurHandler} />
          {showLastNameError && <p className={styles['error-text']}>{inputs.lastName.errors}</p>}
        </div>
      </div>
      <div className={styles['form-actions']}>
        <button type='submit' disabled={!formState.isValid}>Submit</button>
      </div>
    </form>
  );
}

export default SignUpFormMobile;