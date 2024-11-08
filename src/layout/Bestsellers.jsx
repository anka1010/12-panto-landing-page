import { useState } from "react";
import ButtonLink from "../components/ButtonLink";
import SwitchButton from "../components/SwitchButton";
import Slider from "../components/Slider";
import FurnitureSlide from "../components/FurnitureSlide";
import styles from "./Bestsellers.module.scss";

const bestsellersArr = [
  {
    id: "00001",
    imgSrc: "./images/bestsellers/bestseller-1.png",
    type: "chair",
    productName: "Sakarias Armchair",
    price: 392.0,
    stars: 5,
  },
  {
    id: "00002",
    imgSrc: "./images/bestsellers/bestseller-2.png",
    type: "chair",
    productName: "Baltsar Chair",
    price: 299.0,
    stars: 5,
  },
  {
    id: "00003",
    imgSrc: "./images/bestsellers/bestseller-3.png",
    type: "chair",
    productName: "Anjay Chair",
    price: 519.0,
    stars: 5,
  },
  {
    id: "00004",
    imgSrc: "./images/bestsellers/bestseller-4.png",
    type: "chair",
    productName: "Nyantuy Chair",
    price: 921.0,
    stars: 4,
  },
  {
    id: "00005",
    imgSrc: "./images/bestsellers/bestseller-5.png",
    type: "chair",
    productName: "Mocha Chair",
    price: 521.0,
    stars: 5,
  },
];

const productTypes = ["Chair", "Bed", "Sofa", "Lamp"];

function Bestsellers() {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <div className={styles.bestsellers}>
      <h2 className="h2">Best Selling Product</h2>
      <SwitchButton
        options={productTypes}
        switchType="furnitureType"
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div className={styles.sliderBlock}>
        <Slider styles={styles} slideWidth={26.8}>
          {bestsellersArr.map((product) => (
            <FurnitureSlide
              key={product.id}
              imgSrc={product.imgSrc}
              productType={product.type}
              productName={product.productName}
              price={product.price}
              starsCount={product.stars}
            />
          ))}
        </Slider>
      </div>
      <ButtonLink path="#!">View all</ButtonLink>
    </div>
  );
}

export default Bestsellers;
