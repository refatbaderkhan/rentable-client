import Reac0t, {useEffect, useState} from 'react'
import './style.css'

const StarRating = ({onChange}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  

  useEffect(() => {
    onChange(rating)
  }
  , [rating])

  
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, i) => {
        i += 1;
        return (
          <button
            type="button"
            key={i}
            className={i <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(i)}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;