import styles from './styles.module.css';

export function TaskStatus() {
  return (
    <section className={styles.container}>
      <aside>
        <p>Tarefas criadas</p> 
        <span>0</span>
      </aside>
      <aside>
        <p>Concluídas</p> 
        <span>0</span>
      </aside>
    </section>
  )
}