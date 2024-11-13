import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>About Us</h2>
      <p className={styles.text}>
        Welcome to our cafe! Here, we serve the best coffee and treats.
      </p>
    </div>
  );
};

export default About;
