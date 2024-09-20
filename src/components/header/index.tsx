import Image from "next/image";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logomark}>
        <Image src="/logomark.svg" alt="logomark" width={33} height={33} />
        <Image src="/logotype.svg" alt="logotype" width={107} height={16} />
      </div>

      <h3 className={styles.title}>Bem-vindo de volta, Marcus</h3>
      <h4 className={styles.subtitle}>Segunda, 01 de dezembro de 2025</h4>
    </header>
  );
};

export default Header;
