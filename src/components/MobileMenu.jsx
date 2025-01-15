import { useState } from "react";
import styles from "./MobileMenu.module.scss";
import ButtonRound from "./ButtonRound";

function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={styles.menu}>
      <button
        className={styles.menuBtn}
        onClick={() => setMobileMenuOpen((prevState) => !prevState)}
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.134,12.21C22.134,11.441 21.511,10.818 20.741,10.818L4.03,10.818C3.26,10.818 2.637,11.441 2.637,12.21C2.637,12.979 3.26,13.603 4.03,13.603L20.741,13.603C21.511,13.603 22.134,12.979 22.134,12.21Z" />
          <g transform="matrix(1,0,0,1,0,5.09226)">
            <path d="M22.134,12.21C22.134,11.441 21.511,10.818 20.741,10.818L4.03,10.818C3.26,10.818 2.637,11.441 2.637,12.21C2.637,12.979 3.26,13.603 4.03,13.603L20.741,13.603C21.511,13.603 22.134,12.979 22.134,12.21Z" />
          </g>
          <g transform="matrix(1,0,0,1,0,-5.09226)">
            <path d="M22.134,12.21C22.134,11.441 21.511,10.818 20.741,10.818L4.03,10.818C3.26,10.818 2.637,11.441 2.637,12.21C2.637,12.979 3.26,13.603 4.03,13.603L20.741,13.603C21.511,13.603 22.134,12.979 22.134,12.21Z" />
          </g>
        </svg>
      </button>

      <div
        className={`${styles.menuContent} ${mobileMenuOpen ? styles.open : ""}`}
      >
        <nav className={styles.nav}>
          <div>
            <p className={styles.link}>Furniture</p>
            <div className={styles.group}>
              <a href="#!" className={styles.link}>
                Beds
              </a>
              <a href="#!" className={styles.link}>
                Chairs
              </a>
              <a href="#!" className={styles.link}>
                All
              </a>
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
        <ButtonRound
          onClick={() => {
            setMobileMenuOpen((prevState) => !prevState);
          }}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.1342 12.2102C22.1342 11.4411 21.5107 10.8176 20.7415 10.8176H13.7782V3.85427C13.7782 3.08512 13.1547 2.46161 12.3856 2.46161C11.6164 2.46161 10.9929 3.08512 10.9929 3.85427V10.8176H4.02962C3.26048 10.8176 2.63696 11.4411 2.63696 12.2102C2.63696 12.9794 3.26048 13.6029 4.02962 13.6029H10.9929V20.5662C10.9929 21.3353 11.6164 21.9588 12.3856 21.9588C13.1547 21.9588 13.7782 21.3353 13.7782 20.5662V13.6029H20.7415C21.5107 13.6029 22.1342 12.9794 22.1342 12.2102Z" />
          </svg>
        </ButtonRound>
      </div>
    </div>
  );
}

export default MobileMenu;
