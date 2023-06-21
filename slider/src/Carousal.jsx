import { useState } from "react";
import { shortList, list } from "./data";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousal = () => {
  const [reviews, setReviews] = useState(list);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <>
      <h2 className="header">/ Reviews</h2>
      <section className="review-card">
        <Slider {...settings}>
          {reviews.map((review) => {
            const { id, image, quote, name, title } = review;
            return (
              <article key={id}>
                <img src={image} alt={name} className="review-img" />
                <h5 className="name">{name}</h5>
                <p className="title">{title}</p>
                <p className="quote">{quote}</p>
                <FaQuoteRight className="quote-icon" />
              </article>
            );
          })}
        </Slider>
        <button className="quote-btn btn-left">
          <FiChevronLeft />
        </button>
        <button className="quote-btn btn-right">
          <FiChevronRight />
        </button>
      </section>
    </>
  );
};
export default Carousal;
