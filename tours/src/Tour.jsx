import { useState } from "react";

const Tour = ({ id, image, price, name, info, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="card" key={id}>
      <img src={image} alt={name} className="img" />
      <h5 className="name">{name}</h5>
      <p className="price">${price}</p>
      <p className="info">
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button className="info-btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "read more"}
        </button>
        <button
          onClick={() => removeTour(id)}
          className="btn btn-block delete-btn"
        >
          not interested
        </button>
      </p>
    </div>
  );
};
export default Tour;
