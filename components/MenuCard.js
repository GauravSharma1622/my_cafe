import styles from './MenuCard.module.css';

const MenuCard = ({ name, description, price, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.details}>
        <h3>{name}</h3>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default MenuCard;
