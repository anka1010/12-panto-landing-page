import ReviewSlide from "../components/ReviewSlide";
import Slider from "../components/Slider";
import styles from "./Reviews.module.scss";

const reviewsArr = [
  {
    id: "00001",
    imgSrc: "./images/reviews/review1.jpg",
    userImg: "./images/reviews/review1-user.jpg",
    userName: "Joe Smith",
    city: "Atlanta",
    reviewText:
      "The best ever expirience with decorating my home office, worth time and effort",
    stars: 5,
  },
  {
    id: "00002",
    imgSrc: "./images/reviews/review2.jpg",
    userImg: "./images/reviews/review2-user.jpg",
    userName: "Evan Dorn",
    city: "Chicago",
    reviewText:
      "I had a wonderful experience with Panto professionals; the staff was knowledgeable and helpful",
    stars: 4,
  },
  {
    id: "00003",
    imgSrc: "./images/reviews/review3.jpg",
    userImg: "./images/reviews/review3-user.jpg",
    userName: "Sam Doe",
    city: "Texas",
    reviewText: "Best place, has wonderful expirience and supportive guidance",
    stars: 5,
  },
  {
    id: "00004",
    imgSrc: "./images/reviews/review4.jpg",
    userImg: "./images/reviews/review4-user.jpg",
    userName: "Mag Silver",
    city: "San Francisco",
    reviewText: "Amazing and quality products, and super helpful support",
    stars: 5,
  },
  {
    id: "00005",
    imgSrc: "./images/reviews/review5.jpg",
    userImg: "./images/reviews/review5-user.jpg",
    userName: "Mpok Ina",
    city: "Boston",
    reviewText:
      "We are happy with the services. They handle all our logistic needs seamlessly",
    stars: 5,
  },
];

function Reviews() {
  return (
    <div className={styles.reviews}>
      <h3 className="h3">Testimonials</h3>
      <h2 className="h2">Our Clients Reviews</h2>
      <div className={styles.sliderBlock}>
        <Slider styles={styles} slideWidth={37}>
          {reviewsArr.map((review) => (
            <ReviewSlide
              key={review.id}
              imgSrc={review.imgSrc}
              userImg={review.userImg}
              userName={review.userName}
              city={review.city}
              review={review.reviewText}
              stars={review.stars}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Reviews;
