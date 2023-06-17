import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Image } from "@chakra-ui/react";

const images = [
  { img: "https://exchange4media.gumlet.io/news-photo/93479-NationalJeansDay.jpg?w=400&dpr=2.6" },
  { img:"https://s.yimg.com/ny/api/res/1.2/StoCLydQpPl6R7Ogmf2pvQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQwMQ--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/96e9d690091d247a550fcd42a5523673" },
  { img: "https://3.bp.blogspot.com/-weq1FgtGXo0/Ub80ogwf91I/AAAAAAAAp5g/KucUCHCE3us/s1600/image009.jpg" },
  { img: "https://s.abcnews.com/images/GMA/220210_gma_reshef_hpMain_16x9_992.jpg" },
  { img: "https://media.self.com/photos/60c246bed8dca49c274264ff/4:3/w_4912,h_3684,c_limit/GettyImages-1220397909.jpg" },
  { img: "https://sourcingjournal.com/wp-content/uploads/2022/02/jordache3.jpg" },
];

export const Index = () => {
  return (
    <Box id="about">

    <Carousel showThumbs={false} transitionTime={900} autoPlay={true} infiniteLoop={true} >
      {images &&
        images.map(({ img }, index) => (
          <Image
          height={["300px", "auto", "500px"]}
          key={index}
          borderRadius={10}
          src={img}
          />
          ))}
    </Carousel>
     </Box>
  );
};

export default Index;