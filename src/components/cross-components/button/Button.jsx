import styles from './Button.module.scss';

const Button = ({onClick, className, type, children, ...other}) => {
  const buttonStyles = `${styles.button} ${className ? styles[className] : ''}`

  if(type && type === 'submit') {
    return <button type={type} className={buttonStyles} {...other}>{children}</button>;
  }

  return <button type={type} className={buttonStyles} onClick={onClick} {...other}>{children}</button>;
}

export default Button;