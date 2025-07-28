import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact</h2>
      <p>
        Feel free to reach out via email at{' '}
        <a href="mailto:youremail@example.com" className={styles.email}>
          youremail@example.com
        </a>
      </p>
    </section>
  );
}