"use client";

import { useState } from "react";
import ButtonAction from "../button";
import ModalAction from "../modal";
import styles from "./tasks.module.scss";
import TaskItem from "../task-item";

const Tasks = () => {
  const [isCancelAction, setIsCancelAction] = useState<boolean>(false);

  function openConfirmationModal() {
    setIsCancelAction(true);
  }
  return (
    <div className={styles.outside}>
      <div className={styles.container}>
        <h2 className={styles.title}>Suas tarefas de hoje</h2>

        <div className={styles.tasks}>
          <TaskItem title="Lavar as mãos" />
          <TaskItem title="Lavar as mãos" />
          <TaskItem title="Lavar as mãos" />
        </div>

        <h2 className={styles.title}>Tarefas finalizadas</h2>
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
