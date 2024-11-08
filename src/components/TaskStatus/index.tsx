import type { TaskStatus } from '../../types/interface';
import styles from './styles.module.css';

export function TaskStatus({ tasksCounter, checkedTasksCounter }: TaskStatus) {
  return (
    <section className={styles.container}>
      <aside>
        <p>Tarefas criadas</p> 
        <span>{tasksCounter}</span>
      </aside>
      <aside>
        <p>Concluídas</p> 
        <span>
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasksCounter} de ${tasksCounter}`
          }
        </span>
      </aside>
    </section>
  )
}