import React, { useState, useEffect } from "react";
// import { SliderData } from "./SliderData";//test data
import "./ImageSlider.css"
import { Flex, VStack } from "@chakra-ui/layout";
import { useSelector } from "react-redux";

//component imports
import Dots from "./Dots";
// import Arrow from "./Arrow";
import Slide from "./Slide";
import { Image } from "@chakra-ui/image";

function scrollTo(el) {
    const elLeft = el.offsetLeft + el.offsetWidth;
    const elParentLeft = el.parentNode.offsetLeft + el.parentNode.offsetWidth;

    // check if element not in view
    if (elLeft >= elParentLeft + el.parentNode.scrollLeft) {
      el.parentNode.scroll({ left: elLeft - elParentLeft, behavior: "smooth" });
    } else if (elLeft <= el.parentNode.offsetLeft + el.parentNode.scrollLeft) {
      el.parentNode.scroll({
        left: el.offsetLeft - el.parentNode.offsetLeft,
        behavior: "smooth",
      });
    }
  }


const ImageSlider = () => {

    const productReducer = useSelector(({ productReducer }) => productReducer);
    let SliderData=[];
    productReducer.productDetails.map((product) => {

     return(
        SliderData = [
            {image: product.item_main_image},
            {image: product.item_extra_image1},
            {image: product.item_extra_image2},
            {image: product.item_extra_image3},
            {image: product.item_extra_image4},
        ]
        )})
  

    const [current, setCurrent] = useState(0)
    // const length = SliderData.length

    useEffect(() => {
        var thumbnailsArray = document.getElementsByClassName("thumbnail");
        var i;
        for (i = 0; i < thumbnailsArray.length; i++) {
            thumbnailsArray[i].className = thumbnailsArray[i].className.replace(
            "active-thumbnail", "");
            if (thumbnailsArray.length > 0){
                thumbnailsArray[i].classList.remove('active-thumbnail')
            }
            const SlideIndex = current;
            if (thumbnailsArray[SlideIndex] !== undefined)
            thumbnailsArray[SlideIndex].className += " active-thumbnail";
        scrollTo(document.getElementById(`thumbnail-${SlideIndex}`));
            }
    }, [current])

    // const nextSlide = () => {
    //     setCurrent(current === length - 1? 0 : current + 1)
    // }
    // console.log(current)

    // const prevSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1)
    // }


    if (!Array.isArray(SliderData) || SliderData.length<=0){
        return null;
    }
    //alternative fallback path
    return(
        <Flex mt={10} height="100vh" ml={10} flexDir="row">
            {/* Thumbnails */}
            <VStack spacing="30px"  mr={10} alignItems="center">
                {SliderData.map((slide,index) => {
                    return(
                        <Image onClick={(e) => {setCurrent(index)}} id={`thumbnail-${index}`} key={index} className="thumbnail" src={slide.image} fallbackSrc="https://via.placeholder.com/150" alt="thumbnail"/>
                    )
                })}
            </VStack>
            {/* Image Slider Component */}
            <section className="slider">
                <Dots slides={SliderData} activeSlide={current} />
                <Slide className="slide" current={current} SliderData={SliderData} />   
            </section>
        </Flex>
    )
}

export default ImageSlider;

