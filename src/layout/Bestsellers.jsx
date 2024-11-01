import ButtonLink from "../components/ButtonLink";

import styles from "./Bestsellers.module.scss";

function Bestsellers() {
  return (
    <div className={styles.bestsellers}>
      <h2 className="h2">Best Selling Product</h2>
      <div className={styles.productType}>
        <p>Chair</p>
        <p>Bed</p>
        <p>Sofa</p>
        <p>Lamp</p>
      </div>
      <div className={styles.carousel}>
        <img src="./images/Bestsellers-test.jpg" alt="" />
      </div>
      <ButtonLink path="#!">View all</ButtonLink>
    </div>
  );
}

export default Bestsellers;
