import React, { useState } from "react";
import { SliderData } from "./SliderData";//test data
import "./ImageSlider.css"
import { Flex } from "@chakra-ui/layout";
//component imports
import Dots from "./Dots";
import Arrow from "./Arrow";
import Slide from "./Slide";
import { Thumbnails } from "./Thumbnails";



const ImageSlider = () => {
    const [current, setCurrent] = useState(0)
    const length = SliderData.length

    const nextSlide = () => {
        setCurrent(current === length - 1? 0 : current + 1)
    }
    console.log(current)

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(SliderData) || SliderData.length<=0){
        return null;
    }
    
    return(
        <Flex ml={20} flexDir="column">
            <section className="slider">
                <Dots slides={SliderData} activeSlide={current} />
                <Arrow direction="left" handleClick={prevSlide} />
                <Arrow direction="right" handleClick={nextSlide} />
                <Slide className="slide" current={current} SliderData={SliderData} />   
            </section>
            <Thumbnails className="thumbnail" SliderData={SliderData} setCurrent={setCurrent}/>   
        </Flex>
    )
}

export default ImageSlider;

/*--------------------------Trying to implement thumbnails------------------------------------------------*/

// const [slide, setSlide] = useState(0);
// const [isPaused, setIsPaused] = useState(false);
// const [change, setChange] = useState(0);

// id={`thumbnail-${index}`}
// key={index}
// onClick={(e) => {
//     setSlide(index);
//     setChange(!change);
// }}


// function scrollTo(el) {
//     const elLeft = el.offsetLeft + el.offsetWidth;
//     const elParentLeft = el.parentNode.offsetLeft + el.parentNode.offsetWidth;

//     // check if element not in view
//     if (elLeft >= elParentLeft + el.parentNode.scrollLeft) {
//       el.parentNode.scroll({ left: elLeft - elParentLeft, behavior: "smooth" });
//     } else if (elLeft <= el.parentNode.offsetLeft + el.parentNode.scrollLeft) {
//       el.parentNode.scroll({
//         left: el.offsetLeft - el.parentNode.offsetLeft,
//         behavior: "smooth",
//       });
//     }
//   }

// let thumbnails = document.getElementsByClassName('thumbnail')

	// 	let activeImages = document.getElementsByClassName('active')

	// 	for (var i=0; i < thumbnails.length; i++){

	// 		thumbnails[i].addEventListener('mouseover', function(){
	// 			console.log(activeImages)
				
	// 			if (activeImages.length > 0){
	// 				activeImages[0].classList.remove('active')
	// 			}
				

	// 			this.classList.add('active')
	// 			document.getElementById('active').src = this.src
	// 		})
	// 	}

    // const imgs = document.querySelectorAll('.thumbnail');
    // const imgBtns = [...imgs];
    // let imgId = 1;
    
    // imgBtns.forEach((imgItem) => {
    //     imgItem.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         imgId = imgItem.dataset.id;
    //         slideImage();
    //     });
    // });
    
    // function slideImage(){
    //     const displayWidth = document.querySelector('.thumbnail').clientWidth;
    
    //     document.querySelector('.thumbnail').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    // }
    
    // window.addEventListener('resize', slideImage);