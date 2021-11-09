import { Carousel } from 'react-carousel-minimal';
import dummyData from '../../components/Products/DummyData';

const AdsCarousel = () => {
 

    const captionStyle = {
      fontSize: '1em',
      fontWeight: 'bold',
    }

    return (
      
        <Carousel
            data={dummyData}
            time={2000}
            height="400px" 
            width="90vw"
            captionStyle={captionStyle}
            radius="5px"
            slideNumber={false}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
        /> 
      
    );
  }
  
  export default AdsCarousel;