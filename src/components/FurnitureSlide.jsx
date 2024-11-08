import Stars from "./Stars";
import styles from "./FurnitureSlide.module.scss";

function FurnitureSlide({
  imgSrc,
  productType,
  productName,
  price,
  starsCount,
}) {
  return (
    <div className={styles.slide}>
      <div className={styles.topBlock}>
        <div className={styles.backgroundBlock}></div>
        <img src={imgSrc} alt="Furniture photo" />
      </div>
      <div className={styles.bottomBlock}>
        <p className={styles.productType}>{productType}</p>
        <a href="#!" className={styles.productName}>
          {productName}
        </a>
        <div className={styles.stars}>
          <Stars starsCount={starsCount} />
        </div>
        <div className={styles.priceRow}>
          <p className={styles.price}>
            <span>$</span>
            {price}
          </p>
          <button className={styles.btnAddToCart}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.1342 12.2102C22.1342 11.4411 21.5107 10.8176 20.7415 10.8176H13.7782V3.85427C13.7782 3.08512 13.1547 2.46161 12.3856 2.46161C11.6164 2.46161 10.9929 3.08512 10.9929 3.85427V10.8176H4.02962C3.26048 10.8176 2.63696 11.4411 2.63696 12.2102C2.63696 12.9794 3.26048 13.6029 4.02962 13.6029H10.9929V20.5662C10.9929 21.3353 11.6164 21.9588 12.3856 21.9588C13.1547 21.9588 13.7782 21.3353 13.7782 20.5662V13.6029H20.7415C21.5107 13.6029 22.1342 12.9794 22.1342 12.2102Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FurnitureSlide;
