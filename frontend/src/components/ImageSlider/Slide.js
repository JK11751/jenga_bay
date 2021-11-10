import React from 'react'

const Slide = ({SliderData, current}) => {
    return (
        <div>
        {SliderData.map((slide,index) => {
            return(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && ( 
                    <img className="image" src={slide.image} alt="product images" />
                )}
                </div>
                
            )
        })}
        </div>
    )
}

export default Slide
