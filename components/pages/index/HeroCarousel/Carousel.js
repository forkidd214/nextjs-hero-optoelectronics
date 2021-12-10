import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { DotButton, PrevButton, NextButton } from './CarouselButtons';

import styles from './Carousel.module.css';

//feeds
import { useRouter } from 'next/router';

export default function Carousel({ slides }) {
  const router = useRouter();

  const options = { delay: 4000 };
  const autoplay = Autoplay(options);

  const [viewportRef, embla] = useEmblaCarousel(
    { skipSnaps: false, loop: true },
    [autoplay]
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  const onSlideClick = useCallback(
    (id) => {
      if (embla && embla.clickAllowed()) {
        const clickedSlide = slides.find((slide) => slide.id === id);
        console.log(clickedSlide.attributes.link.href);
        clickedSlide && router.push(clickedSlide.attributes.link.href);
      }
    },
    [embla]
  );

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={viewportRef}>
        <div className={styles.embla__container}>
          {slides.map(({ id, attributes: { image, link } }) => (
            <div
              className={styles.embla__slide}
              key={id}
              onClick={() => onSlideClick(id)}
            >
              <div className={styles.embla__slide__inner}>
                <Image
                  className={styles.embla__slide__nextImage}
                  priority
                  layout="responsive"
                  src={image.data.attributes.url}
                  alt="Placeholder image"
                  width={image.data.attributes.width}
                  height={image.data.attributes.height}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      <div className={styles.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
