"use client";

import { useState } from "react";
import TrashIcon from "../trask-icon";
import styles from "./task-item.module.scss";
import ModalAction from "../modal";
import { ITask } from "@/types/task";
import { useToggleTaskMutation } from "@/service/mutations/tasks";

type TaskItemProps = {
  title: string;
  task: ITask;
};

const TaskItem = ({ title, task }: TaskItemProps) => {
  const [isCancelAction, setIsCancelAction] = useState<boolean>(false);

  const { mutate: toggleTask } = useToggleTaskMutation();

  function openConfirmationModal() {
    setIsCancelAction(true);
  }

  return (
    <div className={styles.container}>
      <label className={styles.checkboxContainer}>
        <input
          onChange={() => toggleTask(task)}
          checked={task.completed}
          type="checkbox"
        />
        <span className={styles.checkmark}></span>
        <span className={`${task.completed && styles.completed}`}>{title}</span>
      </label>
      <button onClick={openConfirmationModal}>
        <TrashIcon />
      </button>

      {isCancelAction && (
        <ModalAction
          task={task}
          setCancelAction={setIsCancelAction}
          title="Deletar tarefa"
          action="delete"
        />
      )}
    </div>
  );
};

export default TaskItem;
