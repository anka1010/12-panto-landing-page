import styles from "./ButtonLink.module.scss";

function ButtonLink({ path = "#!", children }) {
  return (
    <a href={path} className={styles.link}>
      {children}
      <svg
        width="39"
        height="13"
        viewBox="0 0 39 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.5 6.40049H38M38 6.40049C38 6.40049 33.5119 3.44891 32.6 1.00049M38 6.40049C38 6.40049 34.0324 9.17387 32.6 11.8005" />
      </svg>
    </a>
  );
}

export default ButtonLink;
