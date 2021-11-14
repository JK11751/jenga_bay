import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const Slide = ({SliderData, current }) => {
    return (
        <div>
        {SliderData.map((slide,index) => {
            return(
                <Box borderWidth="1px" rounded="lg" shadow="xl" className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && ( 
                    <Image className="image" src={slide.image} alt="product images" fallbackSrc="https://via.placeholder.com/150" />
                )}
                </Box>
                
            )
        })}
        </div>
    )
}

export default Slide
