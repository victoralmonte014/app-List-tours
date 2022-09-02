import React, { useState } from "react";

const Tour = ({ id, name, image, price, info, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}`}
          <button
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "see less" : "see More"}
          </button>
        </p>
        <button onClick={()=>{removeTour(id)}} className="delete-btn">not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
