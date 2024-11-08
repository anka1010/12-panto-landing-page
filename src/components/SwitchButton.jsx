import styles from "./SwitchButton.module.scss";

function SwitchButton({
  options = [],
  switchType = "switchType",
  selectedOption,
  setSelectedOption,
}) {
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
              onChange={() => setSelectedOption(index)}
            />
            <label
              htmlFor={option}
              className={`${selectedOption === index ? styles.active : ""}`}
            >
              {option}
            </label>
          </div>
        ))}
      </fieldset>
    </div>
  );
}

export default SwitchButton;
