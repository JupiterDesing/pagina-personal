import React from 'react';
import { Carousel } from 'antd';
import Button from './Button.astro';

const jobs = [
  {title: 'proyecto de jupiter design 1', image: '/mokcups-1.png'},
  {title: 'proyecto de jupiter design 2', image: '/mokcups-2.png'},
  {title: 'proyecto de jupiter design 3', image: '/mokcups-3.png'},
  {title: 'proyecto de jupiter design 4', image: '/mokcups-4.png'},
  {title: 'proyecto de jupiter design 5', image: '/mokcups-5.png'},
  
]

const CarruselComponent: React.FC = () => {
  

  return (
    
<Carousel arrows slidesToShow={window.innerWidth < 768 ? 1 : 2 } dots={false}>
  {jobs.map((job) => (
    <div className='w-full rounded-2xl px-2 h-[280px] relative overflow-hidden group'  rel="noopener noreferrer">
      {/* Imagen del job */}
      <img 
        src={job.image} 
        alt={job.title} 
        className='w-full h-full rounded-2xl object-cover z-10 mx-2' 
      />
      {/* Primera máscara */}
      <span className="absolute h-[280px] top-0 left-0  opacity-100 z-20 w-full rounded-2xl" />
      {/* Segunda máscara ajustada */}
      <span className="absolute top-32 left-60 bg-backgroundPrimary z-30 h-full w-full rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>


    </div>
  ))}
</Carousel>
  );
};

export default CarruselComponent;