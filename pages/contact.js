// pages/contact.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';  
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h2 className={styles.heading}>Contact Us</h2> 
        <p className={styles.text}>Feel free to get in touch with us!</p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
