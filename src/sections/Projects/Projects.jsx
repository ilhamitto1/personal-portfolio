import styles from './ProjectsStyles.module.css';
import weather from '../../assets/weatherapp.png';
import productlist from '../../assets/productlist.png';
import quizapp from '../../assets/quizapp.png';
import bookstore from '../../assets/bookstore.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={weather}
          link="https://weather-app-beta-bay.vercel.app/"
          h3=""
          p="Weather App"
        />
        <ProjectCard
          src={productlist}
          link="https://product-list-rose-delta.vercel.app/"
          h3=""
          p="Product List"
        />
        <ProjectCard
          src={quizapp}
          link="https://quizapp-phi-eight.vercel.app/"
          h3=""
          p="Quiz App"
        />
        <ProjectCard
          src={bookstore}
          link=""
          h3="As soon as"
          p="Book Store"
        />
      </div>
    </section>
  );
}

export default Projects;
