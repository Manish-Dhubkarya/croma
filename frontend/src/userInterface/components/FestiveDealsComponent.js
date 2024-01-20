import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { serverURL } from "../../services/FetchNodeServices";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



export default function FestiveDealsComponent(){
    const theme = useTheme();
      const matches = useMediaQuery(theme.breakpoints.down('md'));

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: matches?4.5:4,
        slidesToScroll: 3,
        arrows:matches?false:true
      };

      var data = [{id:0,icon:'d1.png'},
                  {id:1,icon:'d2.png'},
                  {id:2,icon:'d3.png'},
                  {id:3,icon:'d4.png'},
                  {id:4,icon:'d5.png'},
                  {id:5,icon:'d6.png'},
                  {id:6,icon:'d7.png'},
                   ]

      const festiveDealsSlider=()=>{
        return data.map((item)=>{
            return(<div>
                <img src={`${serverURL}/images/${item.icon}`} style={{width:'95%',padding:'3%'}}/>               
            </div>)
        })
      }

    return (<div style={{width:matches?'100%':'70%',marginTop:'3%'}}>
              <div style={{color:'#fff',fontSize:matches?'3vw':'1.5vw'}}>Festive Fiesta Deals</div>
                <Slider {...settings}>
                    {festiveDealsSlider()}
                </Slider>
    </div>)
}


