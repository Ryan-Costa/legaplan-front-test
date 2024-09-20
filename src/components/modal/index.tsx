"use client";

import { useEffect, useState } from "react";
import ButtonAction from "../button";
import styles from "./modal.module.scss";
import {
  useCreateTaskMutation,
  useDeleteTaskMutation,
} from "@/service/mutations/tasks";
import { ITask } from "@/types/task";

type ModalActionProps = {
  title: string;
  action: "create" | "delete";
  setCancelAction: React.Dispatch<React.SetStateAction<boolean>>;
  task?: ITask;
};

const ModalAction = ({
  title,
  action,
  setCancelAction,
  task,
}: ModalActionProps) => {
  const [taskTitle, setTaskTitle] = useState("");
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  function handleCancel() {
    document.body.style.overflow = "auto";
    setCancelAction(false);
  }

  const { mutate: createTask } = useCreateTaskMutation();
  const { mutate: deleteTask } = useDeleteTaskMutation();

  function handleDelete(id: string) {
    deleteTask(id);
    setCancelAction(false);
  }

  function handleCreate(title: string) {
    if (title === "") return;

    createTask(title);
    setCancelAction(false);
  }

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.wrapper}>
          {action === "delete" ? (
            <p>Tem certeza que você deseja deletar essa tarefa?</p>
          ) : (
            <div className={styles.boxInput}>
              <p>Título</p>
              <input
                value={taskTitle}
                required
                onChange={(e) => setTaskTitle(e.target.value)}
                className={styles.input}
                placeholder="Digite"
                type="text"
              />
            </div>
          )}
          <div className={styles.containerButtons}>
            {action === "create" ? (
              <ButtonAction
                onClick={() => handleCreate(taskTitle)}
                text="Adicionar"
                action="create"
                disabled={taskTitle === ""}
              />
            ) : (
              <ButtonAction
                onClick={() => handleDelete(task!.id)}
                text="Deletar"
                action="delete"
              />
            )}
            <ButtonAction
              onClick={handleCancel}
              text="Cancelar"
              action="cancel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAction;
