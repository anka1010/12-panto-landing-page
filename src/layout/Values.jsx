import Value from "../components/Value";
import styles from "./Values.module.scss";

function Values() {
  return (
    <div className={styles.values}>
      <Value
        type="left"
        value="experiences"
        header="we provide you the best experience"
        text="You don’t have to worry about the final result because all of our sample interiors are designed by professionals and our products are made with premium quality materials"
      ></Value>
      <Value
        type="right"
        value="Materials"
        header="High quality materials for making furniture"
        text="At Panto we are very serious about not only good looking product but quality as well "
      ></Value>
    </div>
  );
}

export default Values;
