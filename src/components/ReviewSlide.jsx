import Stars from "./Stars";
import styles from "./ReviewSlide.module.scss";

function ReviewSlide({
  imgSrc = "",
  userImg = "",
  userName = "",
  city = "",
  review = "",
  stars = 5,
}) {
  return (
    <div className={styles.slide}>
      <div className={styles.slideBlock}>
        <img
          src={imgSrc}
          alt="Room with furniture photo"
          className={styles.backgroundImg}
        />
        <div className={styles.reviewBlock}>
          <div className={styles.userImg}>
            <img src={userImg} alt="User photo" />
            <img src={userImg} alt="shadow" className={styles.shadow} />
          </div>
          <p className={styles.userName}>{userName}</p>
          <p className={styles.city}>{city}</p>
          <p className={styles.reviewText}>{review}</p>
          <div className={styles.stars}>
            <Stars starsCount={stars} />
          </div>
        </div>
      </div>
      <img src={imgSrc} alt="Shadow" className={styles.shadow} />
    </div>
  );
}

export default ReviewSlide;
