import { Carousel } from 'react-carousel-minimal';
import dummyData from './DummyData';

const ImageCarousel = () => {
 

  // const captionStyle = {
  //   fontSize: '2em',
  //   fontWeight: 'bold',
  // }
  // const slideNumberStyle = {
  //   fontSize: '20px',
  //   fontWeight: 'bold',
  // }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={dummyData}
            time={2000}
            width="500px"
            height="400px"
            // captionStyle={captionStyle}
            radius="5px"
            slideNumber={false}
            // slideNumberStyle={slideNumberStyle}
            // captionPosition="bottom"
            automatic={false}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "20px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
