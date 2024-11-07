import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
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
      </section>
    </ main>
  )
}
