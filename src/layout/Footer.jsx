import Logo from "../components/Logo";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerBlock}>
        <div className={styles.topRow}>
          <div className={styles.leftBlock}>
            <Logo />
            <p>
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
          </div>
          <div className={styles.rightBlock}>
            <div className={styles.block}>
              <p>Services</p>
              <a href="#!">Email Marketing</a>
              <a href="#!">Campaigns</a>
              <a href="#!">Branding</a>
            </div>
            <div className={styles.block}>
              <p>Furniture</p>
              <a href="#!">Beds</a>
              <a href="#!">Chair</a>
              <a href="#!">All</a>
            </div>
            <div className={styles.block}>
              <p>Follow Us</p>
              <a href="#!">
                <span className={styles.icon}>
                  <svg
                    width="10"
                    height="20"
                    viewBox="0 0 10 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.14971 3.29509H9.96139V0.139742C9.64884 0.0967442 8.5739 0 7.32201 0C4.70992 0 2.92057 1.643 2.92057 4.66274V7.44186H0.0380859V10.9693H2.92057V19.845H6.45462V10.9701H9.22052L9.65958 7.44269H6.4538V5.01251C6.45462 3.99297 6.72915 3.29509 8.14971 3.29509Z" />
                  </svg>
                </span>
                <span>Facebook</span>
              </a>
              <a href="#!">
                <span className={styles.icon}>
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.5556 1.881C18.8283 2.2 18.0534 2.41144 17.2456 2.51411C18.0767 2.01789 18.711 1.23811 19.0092 0.298222C18.2343 0.760222 17.3788 1.08656 16.467 1.26867C15.7312 0.485222 14.6826 0 13.5386 0C11.319 0 9.53211 1.80156 9.53211 4.01011C9.53211 4.32789 9.559 4.63344 9.625 4.92433C6.292 4.76178 3.34278 3.16433 1.36156 0.730889C1.01567 1.331 0.812778 2.01789 0.812778 2.75733C0.812778 4.14578 1.52778 5.37656 2.59356 6.08911C1.94944 6.07689 1.31756 5.88989 0.782222 5.59533C0.782222 5.60756 0.782222 5.62344 0.782222 5.63933C0.782222 7.58756 2.17189 9.20578 3.99422 9.57856C3.66789 9.66778 3.31222 9.71056 2.94311 9.71056C2.68644 9.71056 2.42733 9.69589 2.18411 9.64211C2.70356 11.2298 4.17756 12.397 5.93022 12.4349C4.56622 13.5019 2.83433 14.1448 0.959444 14.1448C0.630667 14.1448 0.315333 14.1301 0 14.0898C1.77589 15.235 3.88056 15.8889 6.15022 15.8889C13.5276 15.8889 17.5609 9.77778 17.5609 4.48067C17.5609 4.30344 17.5548 4.13233 17.5462 3.96244C18.3419 3.39778 19.0104 2.69256 19.5556 1.881Z" />
                  </svg>
                </span>
                <span>Twitter</span>
              </a>
              <a href="#!">
                <span className={styles.icon}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.25 0H13.75C17.2013 0 20 2.79875 20 6.25V13.75C20 17.2013 17.2013 20 13.75 20H6.25C2.79875 20 0 17.2013 0 13.75V6.25C0 2.79875 2.79875 0 6.25 0ZM13.75 18.125C16.1625 18.125 18.125 16.1625 18.125 13.75V6.25C18.125 3.8375 16.1625 1.875 13.75 1.875H6.25C3.8375 1.875 1.875 3.8375 1.875 6.25V13.75C1.875 16.1625 3.8375 18.125 6.25 18.125H13.75Z" />
                    <path d="M5 10C5 7.23875 7.23875 5 10 5C12.7613 5 15 7.23875 15 10C15 12.7613 12.7613 15 10 15C7.23875 15 5 12.7613 5 10ZM6.875 10C6.875 11.7225 8.2775 13.125 10 13.125C11.7225 13.125 13.125 11.7225 13.125 10C13.125 8.27625 11.7225 6.875 10 6.875C8.2775 6.875 6.875 8.27625 6.875 10Z" />
                    <circle cx="15.3752" cy="4.62499" r="0.66625" />
                  </svg>
                </span>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottomRow}>
          <p className={styles.leftBlock}>Copyright © 2021</p>
          <div className={styles.rightBlock}>
            <a href="#!">Terms & Conditions</a>
            <a href="#!">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
