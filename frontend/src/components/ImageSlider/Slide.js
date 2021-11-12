import React from 'react'
import { Box } from '@chakra-ui/layout'

const Slide = ({SliderData, current }) => {
    return (
        <div>
        {SliderData.map((slide,index) => {
            return(
                <Box  borderWidth="1px" rounded="lg" shadow="xl" className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && ( 
                    <img className="image" src={slide.image} alt="product images" />
                )}
                </Box>
                
            )
        })}
        </div>
    )
}

export default Slide
