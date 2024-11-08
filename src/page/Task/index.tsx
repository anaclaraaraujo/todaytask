import { useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TaskItem } from "../../components/TaskItem";
import { TaskStatus } from "../../components/TaskStatus";
import { PlusCircle } from "@phosphor-icons/react";
import { NoTasks } from "../../components/NoTasks";
import { useTasks } from "../../hook/useTasks";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import type { Task } from "../../types/interface";
import styles from './styles.module.css';

export function Task() {
  const [inputValue, setInputValue] = useState('');
  const { tasks, addTask, removeTask, toggleTaskStatus, setTasks } = useTasks();

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1;
    }
    return prevValue;
  }, 0);

  const handleOnDragEnd = (result: any) => {
    const { destination, source } = result;

    // Se o item não foi movido para uma nova posição, não faz nada
    if (!destination) return;

    // Se o item for movido para outra posição
    if (destination.index !== source.index) {
      const reorderedTasks = Array.from(tasks);
      const [removed] = reorderedTasks.splice(source.index, 1);
      reorderedTasks.splice(destination.index, 0, removed);

      // Atualiza a lista de tarefas com a nova ordem
      setTasks(reorderedTasks);
    }
  };

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
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="tasksList">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{ listStyle: 'none', padding: 0 }}
                  >
                    {tasks.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}>
                            <TaskItem
                              data={task}
                              removeTask={removeTask}
                              toggleTaskStatus={(args) => toggleTaskStatus(args.id, args.value)}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          ) : (
            <NoTasks />
          )}
        </div>
      </section>
    </main>
  );
}
