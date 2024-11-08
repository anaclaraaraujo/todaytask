import styles from './styles.module.css'
import imgClipboard from '../../assets/Clipboard.png'

export function NoTasks() {
  return(
    <div className={styles.container}>
      <img src={imgClipboard} alt="Ícone de prancheta" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer.
        </p>    
    </div>
  )
}