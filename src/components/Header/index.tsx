import styles from './styles.module.css'

export function Header() {
  return (
    <header className={styles.container}>
      <img src="src/assets/logo.svg" alt="logo da aplicação" />
    </header>
  )
}