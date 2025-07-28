import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="#home" className={styles.logo}>
          MyPortfolio
        </Link>
        <div className={styles.links}>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}