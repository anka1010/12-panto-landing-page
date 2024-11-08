import { useRef } from "react";
import ButtonRound from "./ButtonRound";

function Slider({ styles, slideWidth = 0, children }) {
  const slidesEl = useRef();
  const slideWidthPx =
    slideWidth *
    parseFloat(getComputedStyle(document.documentElement).fontSize);

  return (
    <div className={styles.slider}>
      <div className={`${styles.btnLeft} ${styles.btn}`}>
        <ButtonRound
          onClick={() => (slidesEl.current.scrollLeft -= slideWidthPx)}
        >
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.6958 7.43548H2.48568M2.48568 7.43548C2.48568 7.43548 7.36397 4.22725 8.35524 1.56592M2.48568 7.43548C2.48568 7.43548 6.79826 10.45 8.35524 13.305"
              strokeWidth="2"
            />
          </svg>
        </ButtonRound>
      </div>
      <div className={styles.sliderContainer}>
        <div className={styles.slides} ref={slidesEl}>
          {children}
        </div>
      </div>
      <div className={`${styles.btnRight} ${styles.btn}`}>
        <ButtonRound
          onClick={() => (slidesEl.current.scrollLeft += slideWidthPx)}
        >
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.30417 7.43548H18.5143M18.5143 7.43548C18.5143 7.43548 13.636 4.22725 12.6447 1.56592M18.5143 7.43548C18.5143 7.43548 14.2017 10.45 12.6447 13.305"
              strokeWidth="2"
            />
          </svg>
        </ButtonRound>
      </div>
    </div>
  );
}

export default Slider;
