import styles from "./ButtonRound.module.scss";

function ButtonRound({ onClick = undefined, children }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonRound;
