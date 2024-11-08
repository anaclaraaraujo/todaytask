import { useState, useEffect } from "react";
import type { Task } from "../types/interface";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // tarefas iniciais de exemplo para o usuario
  const initialTasks: Task[] = [
    { id: 1, text: "Implementar a tela de cadastro de tarefas", isChecked: true },
    { id: 2, text: "Implementar a funcionalidade de marcar/desmarcar tarefas", isChecked: true },
    { id: 3, text: "Adicionar a opção de remover tarefas", isChecked: true },
    { id: 4, text: "Criar um contador de tarefas feitas e pendentes", isChecked: true },
    { id: 5, text: "Testar as funcionalidades e corrigir bugs", isChecked: false },
    { id: 6, text: "Fazer deploy do projeto", isChecked: false },
  ];
  
  // recupera as tarefas do localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      setTasks(initialTasks);
    }
  }, []);

  // salva as tarefas no localStorage quando o estado for alterado
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks])


  // adiciona uma nova tarefa
  function addTask(inputValue: string) {
    if (!inputValue) return;

    const newTask: Task = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false
    }

    setTasks((state) => [...state, newTask]);
  }


  // remove uma tarefa
  function removeTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    if (!confirm('Deseja mesmo apagar essa tarefa?')) return;
    setTasks(filteredTasks);
  }

  // altera o status da tarefa (checked ou unchecked)
  function toggleTaskStatus(id: number, value: boolean) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return {
    tasks,
    addTask,
    removeTask,
    toggleTaskStatus,
    setTasks
  }
}