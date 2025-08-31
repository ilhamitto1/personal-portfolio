import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profile1.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/ilham.dosdiyev.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}

          alt="Profile picture of Ilham Dosdiyev"
      

        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Ilham
          <br />
          Dosdiyev
        </h1>

        <h2>Software Developer</h2>

        <h2>Frontend Developer</h2>

        <span>
          <a href="https://github.com/ilhamitto1" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/ilham-dosdiyev-b27a09305/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>

       Software Developer with a strong interest in building scalable and efficient systems by combining expertise in Data Engineering and Frontend Development. Passionate about transforming data into actionable insights and creating seamless digital experiences with modern web technologies

        Driven by a passion for crafting high performance and scalable React applications tailored to elevate digital experiences for modern businesses

        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
