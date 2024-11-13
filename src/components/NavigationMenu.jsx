import { useState } from "react";
import styles from "./NavigationMenu.module.scss";

function NavigationMenu() {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={`${styles.link} ${styles.linkGroup}`}>
        <div
          className={styles.group}
          onClick={() => {
            setSubmenuOpen((prevState) => !prevState);
          }}
        >
          <span>Furniture</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.00005 7.49554C3.99969 7.62361 4.02324 7.75016 4.06897 7.86588C4.1147 7.98159 4.18145 8.08354 4.26431 8.16423L8.54962 12.305C8.67742 12.4311 8.83772 12.5 9.00315 12.5C9.16858 12.5 9.32888 12.4311 9.45668 12.305L13.742 8.01849C13.8878 7.87297 13.9796 7.66387 13.997 7.43718C14.0144 7.21048 13.9561 6.98477 13.8348 6.8097C13.7136 6.63463 13.5394 6.52453 13.3505 6.50363C13.1617 6.48273 12.9736 6.55274 12.8278 6.69825L8.99958 10.5304L5.17137 6.82685C5.06653 6.72201 4.93887 6.65542 4.80349 6.63495C4.66811 6.61448 4.53068 6.64098 4.40746 6.71133C4.28424 6.78167 4.18038 6.89292 4.10818 7.03189C4.03598 7.17087 3.99846 7.33177 4.00005 7.49554Z" />
          </svg>
        </div>
        <div
          className={`${styles.submenu} ${
            submenuOpen ? styles.submenuOpen : styles.submenuClose
          }`}
        >
          <a href="#!">Beds</a>
          <a href="#!">Chairs</a>
          <a href="#!">All</a>
        </div>
      </div>
      <a href="#!" className={styles.link}>
        Shop
      </a>
      <a href="#!" className={styles.link}>
        About Us
      </a>
      <a href="#!" className={styles.link}>
        Contact
      </a>
    </nav>
  );
}

export default NavigationMenu;
