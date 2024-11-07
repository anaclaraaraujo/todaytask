import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TaskItem } from "../../components/TaskItem";
import { TaskStatus } from "../../components/TaskStatus";
import styles from './styles.module.css';

export function Home() {
  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input />
          <Button />
        </div>

        <div className={styles.tasksList}>
          <TaskStatus />
          <TaskItem />
        </div>
      </section>
    </ main>
  )
}
