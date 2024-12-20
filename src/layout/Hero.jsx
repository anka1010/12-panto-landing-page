import Cart from "../components/Cart";
import Logo from "../components/Logo";
import NavigationMenu from "../components/NavigationMenu";

import styles from "./Hero.module.scss";

function Hero() {
  const itemsCount = 0;

  return (
    <div className={styles.hero}>
      <header className={styles.header}>
        <Logo />
        <NavigationMenu />
        <Cart itemsCount={itemsCount} />
      </header>
      <h1 className={styles.slogan}>
        Make your interior more
        <br /> minimalistic & modern
      </h1>
      <p className={styles.description}>
        Turn your room with Panto into a lot more minimalistic
        <br /> and modern with ease in no time
      </p>
      <div className={styles.search}>
        <input
          type="text"
          name="query"
          placeholder="Search furniture"
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.75 15.75L12.3855 12.3795M14.25 7.875C14.25 9.56576 13.5784 11.1873 12.3828 12.3828C11.1873 13.5784 9.56576 14.25 7.875 14.25C6.18424 14.25 4.56274 13.5784 3.36719 12.3828C2.17165 11.1873 1.5 9.56576 1.5 7.875C1.5 6.18424 2.17165 4.56274 3.36719 3.36719C4.56274 2.17165 6.18424 1.5 7.875 1.5C9.56576 1.5 11.1873 2.17165 12.3828 3.36719C13.5784 4.56274 14.25 6.18424 14.25 7.875Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Hero;
