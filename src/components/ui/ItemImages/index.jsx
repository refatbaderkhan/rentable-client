import React, {useState} from 'react'
import './style.css'
import { generateImageUrl } from '../../../core/config/generateImageUrl'

const ItemImages = ({ foundItemImages }) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [otherImages, setOtherImages] = useState([
    ...foundItemImages.slice(0, mainImageIndex),
    ...foundItemImages.slice(mainImageIndex + 1),
  ]);

  const handleImageClick = (index) => {
    setMainImageIndex(index);
    setOtherImages([
      ...foundItemImages.slice(0, index),
      ...foundItemImages.slice(index + 1),
    ]);
  };

  return (
    <div>
      <div className='item-main-picture'>
        {foundItemImages.length > 0 && (
          <img src={generateImageUrl(foundItemImages[mainImageIndex])} alt='item' className='item-main-img' />
        )}
      </div>
      <div className='item-other-pictures'>
        {otherImages.map((image, index) => (
          <div className='item-other-picture pointer' key={index} onClick={() => handleImageClick(index)}>
            <img src={generateImageUrl(image)} alt='item' className='item-other-img' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemImages