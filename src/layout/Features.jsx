import ButtonLink from "../components/ButtonLink";
import styles from "./Features.module.scss";

function Features() {
  return (
    <div className={styles.features}>
      <h2 className="h2">
        Why
        <br /> choosing us
      </h2>
      <div className={styles.featureBlock}>
        <div className={styles.feature}>
          <h3 className={styles.h3}>Luxury facilities</h3>
          <p className={styles.p}>
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
          <ButtonLink>More Info</ButtonLink>
        </div>
        <div className={styles.feature}>
          <h3 className={styles.h3}>Affordable Price</h3>
          <p className={styles.p}>
            You can get a workspace of the highst quality at an affordable price
            and still enjoy the facilities that are oly here.
          </p>
          <ButtonLink>More Info</ButtonLink>
        </div>
        <div className={styles.feature}>
          <h3 className={styles.h3}>Many Choices</h3>
          <p className={styles.p}>
            We provide many unique work space choices so that you can choose the
            workspace to your liking.
          </p>
          <ButtonLink>More Info</ButtonLink>
        </div>
      </div>
    </div>
  );
}

export default Features;
