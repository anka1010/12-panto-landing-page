import styles from "./Reviews.module.scss";

function Reviews() {
  return (
    <div className={styles.reviews}>
      <h3 className="h3">Testimonials</h3>
      <h2 className="h2">Our Client Reviews</h2>
      <div className={styles.carousel}></div>
    </div>
  );
}

export default Reviews;
