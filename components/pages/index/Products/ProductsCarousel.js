import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { PrevButton, NextButton } from './ProductsCarouselButtons';

import styles from './ProductsCarousel.module.css';
import { Box, Text, Center, useColorModeValue } from '@chakra-ui/react';

export default function ProductsCarousel({ slides }) {
  const router = useRouter();

  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: 'trimSnaps',
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on('select', onSelect);
  }, [embla, onSelect]);

  const onSlideClick = useCallback(
    (id) => {
      if (embla && embla.clickAllowed()) {
        const clickedSlide = slides.find((slide) => slide.id === id);
        // console.log(clickedSlide?.attributes?.link?.href);
        clickedSlide && router.push(clickedSlide.attributes.link.href);
      }
    },
    [embla]
  );

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={viewportRef}>
        <div className={styles.embla__container}>
          {slides.map(
            ({ id, attributes: { name, description, heroImage } }) => (
              <div
                className={styles.embla__slide}
                key={id}
                onClick={() => onSlideClick(id)}
              >
                <div className={styles.embla__slide__inner}>
                  <Box
                    rounded={'lg'}
                    border="1px"
                    borderColor="gray.200"
                    color={useColorModeValue('gray.900', 'white')}
                    _hover={{
                      cursor: 'pointer',
                      color: 'blue.500',
                    }}
                  >
                    <Box>
                      <Image
                        className={styles.embla__slide__nextImage}
                        src={heroImage.data.attributes.url}
                        alt="Placeholder image"
                        layout="responsive"
                        width={heroImage.data.attributes.width}
                        height={heroImage.data.attributes.height}
                        // layout="fill"
                        // objectFit="fill"
                        // objectPosition="50% 50%"
                        priority
                      />
                    </Box>
                    <Box px={5} py={2}>
                      <Text fontWeight="medium" fontSize="xl" align="center">
                        {name}
                      </Text>
                      <Text fontSize="md" isTruncated>
                        {description}
                      </Text>
                    </Box>
                  </Box>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
}

{
  /* <div className="card">
  <div className="card-image">
    <figure className="image is-1by1">
      <Image
        className={styles.embla__slide__nextImage}
        src={image}
        alt="Placeholder image"
        layout="fill"
        objectFit="fill"
        objectPosition="50% 50%"
        priority
      />
    </figure>
  </div>
  <div className="card-content">
    <Link href="#">
      <p className={`title is-4 has-text-centered is-clickable ${styles.link}`}>
        {label}
      </p>
    </Link>
  </div>
</div>; */
}

const cards = [
  {
    id: 1,
    label: 'Design Projects 1',
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 2,
    label: 'Design Projects 2',
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
  },
  {
    id: 3,
    label: 'Design Projects 3',
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 4,
    label: 'Design Projects 4',
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 5,
    label: 'Design Projects 5',
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
  },
  {
    id: 6,
    label: 'Design Projects 6',
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image:
      'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  },
];
