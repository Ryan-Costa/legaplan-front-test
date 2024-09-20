import TrashIcon from "../trask-icon";
import styles from "./task-item.module.scss";

type TaskItemProps = {
  title: string;
};

const TaskItem = ({ title }: TaskItemProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.checkboxContainer}>
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
        {title}
      </label>
      <button>
        <TrashIcon />
      </button>
    </div>
  );
};

export default TaskItem;
