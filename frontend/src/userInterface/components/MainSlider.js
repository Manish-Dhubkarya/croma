import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serverURL } from "../../services/FetchNodeServices";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
export default function MainSlider({banners}){
    const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('md'));
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:matches?false:true
      };
    
    const showSlider=()=>{
    return banners.map((item)=>{ 
    return(<div >
        <img src={`${serverURL}/images/${item}`} style={{width:'100%', height:"40vh"}}/>
       </div>)
    })

    }

      return(<div style={{width:'95%'}}>
        <Slider {...settings}>
         {showSlider()}
        </Slider>

      </div>)
}