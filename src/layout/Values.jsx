import Value from "./Value";
import styles from "./Values.module.scss";

function Values() {
  return (
    <div className={styles.values}>
      <Value
        type="left"
        value="experiences"
        header="we provide you the best experience"
        text="You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials"
      ></Value>
      <Value
        type="right"
        value="Materials"
        header="Very serious materials for making furniture"
        text="Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price"
      ></Value>
    </div>
  );
}

export default Values;
