import React, { useEffect, useState } from 'react';
import './style.css';

const StarRating = ({ onChange, value }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    if (value) {
      setRating(value);
    }
    if (onChange) {
      onChange(rating);
    }
  }, [rating]);

  const handleMouseEnter = (i) => {
    if (!value) {
      setHover(i);
    }
  };

  const handleMouseLeave = () => {
    if (!value) {
      setHover(rating);
    }
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, i) => {
        i += 1;
        return (
          <button
            type="button"
            key={i}
            className={i <= (hover || rating) ? 'on' : 'off'}
            onClick={() => setRating(i)}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;