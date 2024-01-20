import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serverURL } from "../../services/FetchNodeServices";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useState } from "react";
export default function CircleComponent({categories})
{
  const theme = useTheme();
  const matches_md = useMediaQuery(theme.breakpoints.down('md'));
  const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
   const [zoom, setZoom]=useState(null);
    var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: matches_md?5:matches_sm?4:8,
    slidesToScroll: 1,
    arrows:matches_md || matches_sm?false:true
   };

  const AddSlider=()=>{
    return categories.map((item,index)=>{
    return <div style={{width:'100%'}}>
       <div style={{ width:'100%',display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:'200px',height:'200px',borderRadius:'40%'}}>
        <img onMouseEnter={()=>setZoom(index)} onMouseLeave={()=>setZoom(null)} src={`${serverURL}/images/${item.image}`}  style={{width:zoom==index? '70%':"55%"}}/>
       </div>                                   
       </div>
    </div>
    })
  }

  return(<div style={{width:'80%'}}>
  <Slider {...settings}>
    {AddSlider()}    
  </Slider>
  </div>)
}