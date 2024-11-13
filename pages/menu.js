import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuCard from '../components/MenuCard';
import styles from '../styles/Menu.module.css';

const menuItems = [
  {
    name: 'Cappuccino',
    description: 'A rich, frothy coffee made with espresso and steamed milk.',
    price: '₹350.00',
    image: '/images/cappuccino.jpg',
  },
  {
    name: 'Latte',
    description: 'A smooth coffee with espresso, steamed milk, and a touch of foam.',
    price: '₹400.00',
    image: '/images/latte.jpg',
  },
  {
    name: 'Espresso',
    description: 'A bold and concentrated coffee shot made from freshly ground beans.',
    price: '₹250.00',
    image: '/images/espresso.jpg',
  },
];

const Menu = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <h2 className={styles.title}>Our Menu</h2>
      <div className={styles.menu}>
        {menuItems.map((item, index) => (
          <MenuCard key={index} {...item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
