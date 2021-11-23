import React, { useEffect, useState } from "react";
import { Text, Box, Flex, Image } from "@chakra-ui/react";
import Arrow from "../../../components/ImageSlider/Arrow"
import "../../../components/ImageSlider/ImageSlider.css"
import dummyData from "../../../data/DummyData";

const Component = () => {
  
   const slides = dummyData; 
  const [currentSlide, setCurrentSlide] = useState(0);
  const [display, setDisplay] = useState(false)

  const handleMouseEnter = () => {
    setDisplay(true);
  }

  const handleMouseLeave = () => {
    setDisplay(false);
  }

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const SLIDES_INTERVAL_TIME = 5000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  });

  return (
      <Flex borderRadius="5px" w="90vw" overflow="hidden"> 
       { display && <Arrow direction="left" handleClick={prevSlide} />} 
        <Flex pos="relative" h="400px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
                whiteSpace="nowrap"
              >
                {/* {sid + 1} / {slidesCount} */}
              </Text>
              <Image onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()} objectFit="cover" src={slide.image} boxSize="full" backgroundSize="cover" />
            </Box>
          ))} 
        </Flex>
        { display && <Arrow direction="right" handleClick={nextSlide} />}
      </Flex> 
  );
};
export default Component;