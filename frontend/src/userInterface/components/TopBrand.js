import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serverURL } from "../../services/FetchNodeServices";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";

export default function TopBrand({data}) {
    const matches = useMediaQuery('(max-width:800px)')
    const [zoom, setZoom]=useState(null)

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: matches ? 4.5 : 8,
        slidesToScroll: 6,
        focusOnSelect: true,
        arrows: matches ? false : true,
        rows: matches ? 2 : 1
    }

    
    function showSlider() {
        
        return data.map((item, index) => {
            return (
                <div style={{width:'100%'}}>
                    <div style={{width:"100%", height:"150px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <img onMouseEnter={()=>setZoom(index)} onMouseLeave={()=>setZoom(null)} src={`${serverURL}/images/${item.logo}`} style={{borderRadius:"50%", width:zoom==index?"90%":"80%", cursor:"pointer", height:zoom==index?"130px":"110px"}} alt="category"></img>
                </div></div>
            )
        })
       
    }
    return (
        <div style={{ width: matches ? '95%' : '80%' }}>
              <div  style={{fontWeight:'bolder',fontSize:26,color:'#fff',margin:'10px 0px 10px 0px'}}>
                Top Brands 
            </div>
            <Slider {...settings}>
                
                {showSlider()}
            </Slider>
        </div>
    )
}
