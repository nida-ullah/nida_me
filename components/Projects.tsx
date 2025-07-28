import styles from '../styles/Projects.module.css';

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A web application that does something awesome.',
    link: 'https://github.com/yourname/project-one',
  },
  {
    title: 'Project Two',
    description: 'Another project showcasing my skills.',
    link: 'https://github.com/yourname/project-two',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}