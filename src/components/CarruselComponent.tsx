import React from 'react';
import { Carousel } from 'antd';

const jobs = [
  {title: 'mockup con logo tierras de mis viejos', image: '/trabajo1.webp'},
  {title: 'identidad visual de tierras de mis viejos', image: '/trabajo2.webp'},
  {title: 'mockup marca personal Marisa Perez', image: '/trabajo3.webp'},
]

const CarruselComponent: React.FC = () => {
  

  return (
    
    <Carousel arrows slidesToShow={2} dots={false}>
  {jobs.map((job) => (
    <div className='w-full rounded-2xl px-2 h-[280px] relative overflow-hidden'>
      {/* Imagen del job */}
      <img 
        src={job.image} 
        alt={job.title} 
        className='w-full h-full rounded-2xl object-cover z-10' 
      />
      {/* Máscara */}
      <span className="absolute h-[280px] top-0 left-0 bg-backgroundDefault opacity-100 z-20 w-full  rounded-2xl" />
    </div>
  ))}
</Carousel>
  );
};

export default CarruselComponent;