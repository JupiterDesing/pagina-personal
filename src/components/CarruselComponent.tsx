import React from 'react';
import { Carousel } from 'antd';



const CarruselComponent: React.FC = () => {
  

  return (
    
    <Carousel  arrows slidesToShow={2} dots={false}>

      <img src="/julian-profile.webp" alt="" className='w-[300px] rounded-2xl px-2'/>
      <img src="/marianela-profile.webp" alt="" className='w-[300px] rounded-2xl px-2'/>
 
    </Carousel>
  );
};

export default CarruselComponent;