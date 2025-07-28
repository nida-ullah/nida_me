import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <h1 className={styles.title}>Hi, I&apos;m Your Name</h1>
      <p className={styles.subtitle}>Full-Stack Developer & Designer</p>
      <a href="#projects" className={styles.cta}>
        View My Work
      </a>
    </section>
  );
}