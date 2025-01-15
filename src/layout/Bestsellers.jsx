import { useState } from "react";
import ButtonLink from "../components/ButtonLink";
import SwitchButton from "../components/SwitchButton";
import Slider from "../components/Slider";
import FurnitureSlide from "../components/FurnitureSlide";
import styles from "./Bestsellers.module.scss";

const products = [
  {
    id: "00001",
    imgSrc: "./images/bestsellers/bestseller-1.png",
    type: "Chair",
    productName: "Classic chair",
    price: 392.0,
    stars: 5,
  },
  {
    id: "00002",
    imgSrc: "./images/bestsellers/bestseller-2.png",
    type: "Chair",
    productName: "Office Chair",
    price: 299.0,
    stars: 5,
  },
  {
    id: "00003",
    imgSrc: "./images/bestsellers/bestseller-3.png",
    type: "Chair",
    productName: "Anjay Chair",
    price: 519.0,
    stars: 5,
  },
  {
    id: "00004",
    imgSrc: "./images/bestsellers/bestseller-4.png",
    type: "Chair",
    productName: "Chess Chair",
    price: 921.0,
    stars: 4,
  },
  {
    id: "00005",
    imgSrc: "./images/bestsellers/bestseller-5.png",
    type: "Chair",
    productName: "Mocha Chair",
    price: 521.0,
    stars: 5,
  },
  {
    id: "00006",
    imgSrc: "./images/bestsellers/bestseller-6.png",
    type: "Chair",
    productName: "Velour Chair",
    price: 364.0,
    stars: 5,
  },
  {
    id: "00007",
    imgSrc: "./images/bestsellers/bestseller-7.png",
    type: "Chair",
    productName: "Cozy Chair",
    price: 364.0,
    stars: 5,
  },
  {
    id: "00008",
    imgSrc: "./images/bestsellers/bestseller-8.png",
    type: "Bed",
    productName: "Kingsize Bed",
    price: 364.0,
    stars: 5,
  },
  {
    id: "00009",
    imgSrc: "./images/bestsellers/bestseller-9.png",
    type: "Bed",
    productName: "Loft Bed",
    price: 364.0,
    stars: 5,
  },
  {
    id: "000010",
    imgSrc: "./images/bestsellers/bestseller-10.png",
    type: "Bed",
    productName: "Super Bed",
    price: 364.0,
    stars: 5,
  },
  {
    id: "000011",
    imgSrc: "./images/bestsellers/bestseller-11.png",
    type: "Bed",
    productName: "Queen Bed",
    price: 364.0,
    stars: 5,
  },
  {
    id: "000012",
    imgSrc: "./images/bestsellers/bestseller-12.png",
    type: "Bed",
    productName: "Superstar Bed",
    price: 364.0,
    stars: 5,
  },
  {
    id: "000013",
    imgSrc: "./images/bestsellers/bestseller-13.png",
    type: "Sofa",
    productName: "Mocha sofa",
    price: 364.0,
    stars: 4,
  },
  {
    id: "000014",
    imgSrc: "./images/bestsellers/bestseller-14.png",
    type: "Sofa",
    productName: "Deep Green Sofa",
    price: 364.0,
    stars: 5,
  },
  {
    id: "000015",
    imgSrc: "./images/bestsellers/bestseller-15.png",
    type: "Sofa",
    productName: "Classic Sofa",
    price: 364.0,
    stars: 5,
  },
  {
    id: "000016",
    imgSrc: "./images/bestsellers/bestseller-16.png",
    type: "Sofa",
    productName: "Terrace Sofa",
    price: 364.0,
    stars: 4,
  },
  {
    id: "000017",
    imgSrc: "./images/bestsellers/bestseller-17.png",
    type: "Sofa",
    productName: "Minimalistic Sofa",
    price: 364.0,
    stars: 5,
  },
  // {
  //   id: "000018",
  //   imgSrc: "./images/bestsellers/bestseller-18.png",
  //   type: "Lamp",
  //   productName: "Study Lamp",
  //   price: 364.0,
  //   stars: 5,
  // },
  // {
  //   id: "000019",
  //   imgSrc: "./images/bestsellers/bestseller-19.png",
  //   type: "Lamp",
  //   productName: "Classic Lamp",
  //   price: 364.0,
  //   stars: 5,
  // },
];

const productTypes = ["Chair", "Bed", "Sofa", "Lamp"];

function Bestsellers() {
  const [selectedOption, setSelectedOption] = useState(0);

  const productType = productTypes[selectedOption];
  const productsFiltered = products.filter(
    (product) =>
      product.type.toLocaleLowerCase() === productType.toLocaleLowerCase()
  );

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
        {productsFiltered.length > 0 && (
          <Slider
            styles={styles}
            slideWidth={26.8}
            selectedOption={selectedOption}
          >
            {productsFiltered.map((product) => (
              <FurnitureSlide
                key={product.id}
                id={product.id}
                imgSrc={product.imgSrc}
                productType={product.type}
                productName={product.productName}
                price={product.price}
                stars={product.stars}
              />
            ))}
          </Slider>
        )}
        {productsFiltered.length === 0 && (
          <div className={styles.noProducts}>No products yet.</div>
        )}
      </div>

      <ButtonLink path="#!">View all</ButtonLink>
    </div>
  );
}

export default Bestsellers;
