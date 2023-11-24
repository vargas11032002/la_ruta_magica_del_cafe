
import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://sanagustinhuila.com.co/img/blog/mirador-mano-del-gigante-huila.webp',
    altText: 'Oferta Especial',
    caption: '¡Descuento del 20% en productos seleccionados!',
    key: 1,
  },
  {
    src: 'https://agenciapublicadeempleo.sena.edu.co/imgLayout/logos/Logosimbolo-SENA-PRINCIPAL.png',
    altText: 'Nuevo Producto',
    caption: 'Descubre nuestra última incorporación: Producto X',
    key: 2,
  },
  {
    src: 'https://www.italia-sica.org/wp-content/uploads/2014/04/IILA-nuovo-trasp.png',
    altText: 'Oferta del Día',
    caption: '¡Solo hoy! Compra uno y llévate otro gratis.',
    key: 3,
  },
];

const imageStyle = {
  width: '100%',
  height: '300px', // Ajusta la altura al 100%
  objectFit: 'contain', // Asegura que la imagen cubra el espacio disponible sin distorsionarse
};

function Example() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const autoChangeInterval = 3000; // Cambia el intervalo a 3 segundos

  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, autoChangeInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [activeIndex]);

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <img src={item.src} alt={item.altText} style={imageStyle} />
      <CarouselCaption>
        <h3>{item.caption}</h3>
      </CarouselCaption>
    </CarouselItem>
  ));

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={false}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={setActiveIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Example;