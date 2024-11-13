import { useRef } from "react";
import styles from "./SwitchButton.module.scss";
import { useEffect } from "react";

function SwitchButton({
  options = [],
  switchType = "switchType",
  selectedOption,
  setSelectedOption,
}) {
  const activeEl = useRef();

  useEffect(() => {
    // assume button width is in rem always
    const buttonWidth =
      8.4 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    activeEl.current.style.transform = `translateX(${
      buttonWidth * selectedOption
    }px)`;
  }, [selectedOption]);

  return (
    <div className={styles.switch}>
      <fieldset className={styles.options}>
        {options.map((option, index) => (
          <div key={index} className={styles.option}>
            <input
              type="radio"
              id={option}
              name={switchType}
              value={option}
              checked={index === selectedOption}
              onChange={() => {
                setSelectedOption(index);
              }}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
        <div className={styles.active} ref={activeEl}></div>
      </fieldset>
    </div>
  );
}

export default SwitchButton;
