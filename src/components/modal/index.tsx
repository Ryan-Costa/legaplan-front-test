"use client";

import { useEffect } from "react";
import ButtonAction from "../button";
import styles from "./modal.module.scss";

type ModalActionProps = {
  title: string;
  action: "create" | "delete";
  setCancelAction: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalAction = ({ title, action, setCancelAction }: ModalActionProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  function handleCancel() {
    document.body.style.overflow = "auto";
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
                className={styles.input}
                placeholder="Digite"
                type="text"
              />
            </div>
          )}
          <div className={styles.containerButtons}>
            {action === "create" ? (
              <ButtonAction text="Adicionar" action="create" />
            ) : (
              <ButtonAction text="Deletar" action="delete" />
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
