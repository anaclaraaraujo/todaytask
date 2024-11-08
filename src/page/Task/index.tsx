import { useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TaskItem } from "../../components/TaskItem";
import { TaskStatus } from "../../components/TaskStatus";
import { PlusCircle } from "@phosphor-icons/react";
import { NoTasks } from "../../components/NoTasks";
import { useTasks } from "../../hook/useTasks";

import type { Task } from "../../types/interface";

import styles from './styles.module.css';


export function Task() {
  const [inputValue, setInputValue] = useState('');
  const { tasks, addTask, removeTask, toggleTaskStatus } = useTasks();

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1;
    }
    return prevValue;
  }, 0);

  function handleAddTask() {
    addTask(inputValue);
    setInputValue('');
  }

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="Adicione uma nova tarefa"
          />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <TaskStatus
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />
          {tasks.length > 0 ? (
            <div>
              {tasks
                .sort((a, b) => (a.isChecked === b.isChecked ? 0 : a.isChecked ? 1 : -1))
                .map((task) => (
                  <TaskItem
                    key={task.id}
                    data={task}
                    removeTask={removeTask}
                    toggleTaskStatus={(args) => toggleTaskStatus(args.id, args.value)}
                  />
                ))}
            </div>
          ) : (
            <NoTasks />
          )}
        </div>
      </section>
    </main>
  );
}