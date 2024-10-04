import React from 'react';
import { Carousel } from 'antd';

const jobs = [
  {title: 'proyecto de landing jupiter', image: '/landing-jupiter.jpeg', href:"https://www.behance.net/gallery/209416989/Landing-Page-UXUI"},
  {title: 'identidad visual de tierras de mis viejos', image: '/trabajo2.webp',href:"https://www.behance.net/gallery/207395949/IDENTIDAD-DE-MARCA-La-Tierra-de-mis-Viejos"},
  {title: 'mockup marca personal Marisa Perez', image: '/trabajo3.webp',href:"https://www.behance.net/gallery/207927373/Identidad-de-Marca-Personal-Logo"},
  {title: 'identidad de marca de naturaleza', image: '/summit-floor.jpeg',href:"https://www.behance.net/gallery/209424405/Brand-Identity-Logo-Nature"},
  {title: 'mockup de Jupiter Design', image: '/packaging-jupiter.jpeg',href:"https://www.behance.net/gallery/206799851/Brand-identity-Studio-Creativo-Jupiter-Design"},
]

const CarruselComponent: React.FC = () => {
  

  return (
    
    <Carousel arrows slidesToShow={window.innerWidth < 768 ? 1 : 2 } dots={false}>
  {jobs.map((job) => (
    <a className='w-full rounded-2xl px-2 h-[280px] relative overflow-hidden' href={job.href} target="_blank" rel="noopener noreferrer">
      {/* Imagen del job */}
      <img 
        src={job.image} 
        alt={job.title} 
        className='w-full h-full rounded-2xl object-cover z-10' 
      />
      {/* Máscara */}
      <span className="absolute h-[280px] top-0 left-0 bg-backgroundDefault opacity-100 z-20 w-full  rounded-2xl" />
    </a>
  ))}
</Carousel>
  );
};

export default CarruselComponent;