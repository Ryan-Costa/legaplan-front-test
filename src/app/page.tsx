import Header from "../components/header";
import Tasks from "../components/tasks";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Tasks />
    </main>
  );
}
