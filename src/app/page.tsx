import { getTasks } from "@/service/task-service";
import Header from "../components/header";
import Tasks from "../components/tasks";
import styles from "./page.module.scss";

export default async function Home() {
  const tasks = await getTasks();

  return (
    <main className={styles.main}>
      <Header />
      <Tasks tasks={tasks} />
    </main>
  );
}
