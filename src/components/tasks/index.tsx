"use client";

import { useState } from "react";
import ButtonAction from "../button";
import ModalAction from "../modal";
import styles from "./tasks.module.scss";
import TaskItem from "../task-item";
import { useTaskQuery } from "@/service/queries/task";
import { ITask } from "@/types/task";

interface ListTasksProps {
  tasks: ITask[];
}

const Tasks = ({ tasks: initialTask }: ListTasksProps) => {
  const [isCancelAction, setIsCancelAction] = useState<boolean>(false);

  const { data: tasks } = useTaskQuery({ initialData: initialTask });

  function openConfirmationModal() {
    setIsCancelAction(true);
  }

  return (
    <div className={styles.outside}>
      <div className={styles.container}>
        {tasks.length > 0 &&
        tasks.filter((task) => !task.completed).length > 0 ? (
          <>
            <h2 className={styles.title}>Suas tarefas de hoje</h2>
            <div className={styles.tasks}>
              {tasks
                .filter((task) => !task.completed)
                .map((task) => (
                  <TaskItem key={task.id} title={task.title} task={task} />
                ))}
            </div>
          </>
        ) : (
          tasks.length === 0 && (
            <h2 className={styles.title}>Adicione uma tarefa</h2>
          )
        )}

        {tasks.filter((task) => task.completed).length > 0 && (
          <>
            <h2 className={styles.title}>Tarefas finalizadas</h2>
            <div className={styles.tasks}>
              {tasks
                .filter((task) => task.completed)
                .map((task) => (
                  <TaskItem key={task.id} title={task.title} task={task} />
                ))}
            </div>
          </>
        )}
      </div>

      <ButtonAction
        onClick={openConfirmationModal}
        text="Adicionar nova tarefa"
        action="create"
      />

      {isCancelAction && (
        <ModalAction
          setCancelAction={setIsCancelAction}
          title="Adicionar tarefa"
          action="create"
        />
      )}
    </div>
  );
};

export default Tasks;
