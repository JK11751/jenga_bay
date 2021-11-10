import React from 'react'
import { HStack } from '@chakra-ui/layout'

export const Thumbnails = ({SliderData,setCurrent}) => {
    return (
        <HStack mt="5vh" alignItems="center" zIndex="20">
            {SliderData.map((slide,index) => {
                return(
                    <img id={`thumbnail-${index}`} key={index} className="thumbnail" src={slide.image} alt="product thumbnails"/>
                )
            })}
        </HStack>
    )
}
