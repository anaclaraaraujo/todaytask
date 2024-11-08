import styles from './styles.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button( props: ButtonProps ) {
  return (
    <button className={styles.button} {...props} />
  )
}