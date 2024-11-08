import styles from "./ButtonRound.module.scss";

function ButtonArrow({ children, onClick = undefined }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonArrow;
