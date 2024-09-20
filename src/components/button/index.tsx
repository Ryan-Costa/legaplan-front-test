import { ComponentProps } from "react";
import styles from "./button.module.scss";

type ButtonProps = ComponentProps<"button"> & {
  text: string;
  action: "create" | "cancel" | "delete";
};

const ButtonAction = ({ text, action, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`
            ${styles.button}
          ${action === "create" && styles.buttonCreate} 
          ${action === "cancel" && styles.buttonCancel} 
          ${action === "delete" && styles.buttonDelete} 
        `}
    >
      {text}
    </button>
  );
};

export default ButtonAction;
