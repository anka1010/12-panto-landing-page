import ButtonLink from "../components/ButtonLink";
import styles from "./Value.module.scss";

function Value({ type, value, header, text, img1, img2, img3 }) {
  return (
    <div className={styles.value}>
      {type === "left" && (
        <>
          <div className={styles.blockImg}>
            <div className={styles.imgLeft}>
              <div className={styles.img1}>
                <img src="./images/values/value1.jpg" alt="Furniture photo" />
                <img
                  src="./images/values/value1.jpg"
                  alt=""
                  className={styles.shadow}
                />
              </div>
              <div className={styles.rect1}></div>
              <div className={styles.rect2}></div>
            </div>
          </div>

          <div className={`${styles.blockText} ${styles.blockTextLeft}`}>
            <h3 className="h3">{value}</h3>
            <h2 className="h2">{header}</h2>
            <p className={styles.text}>{text}</p>
            <ButtonLink>More info</ButtonLink>
          </div>
        </>
      )}
      {type === "right" && (
        <>
          <div className={`${styles.blockText} ${styles.blockTextRight}`}>
            <h3 className="h3">{value}</h3>
            <h2 className="h2">{header}</h2>
            <p className={styles.text}>{text}</p>
            <ButtonLink>More info</ButtonLink>
          </div>

          <div className={styles.blockImg}>
            <div className={styles.imgRight}>
              <div className={styles.img1}>
                <img src="./images/values/value2-1.jpg" alt="Furniture photo" />
                <img
                  src="./images/values/value2-1.jpg"
                  alt="Furniture photo"
                  className={styles.shadow}
                />
              </div>

              <div className={styles.img2}>
                <img src="./images/values/value2-2.jpg" alt="Furniture photo" />
                <img
                  src="./images/values/value2-2.jpg"
                  alt="Furniture photo"
                  className={styles.shadow}
                />
              </div>

              <div className={styles.img3}>
                <img src="./images/values/value2-3.jpg" alt="Furniture photo" />
                <img
                  src="./images/values/value2-3.jpg"
                  alt="Furniture photo"
                  className={styles.shadow}
                />
                <div className={styles.rectangle}></div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Value;
