import styles from './styles.module.css'
import imgLogo from '../../assets/logo.svg'

export function Header() {
  return (
    <header className={styles.container}>
      <img src={imgLogo} alt="logo da aplicação" />
    </header>
  )
}