import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serverURL } from "../../services/FetchNodeServices";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Rating,Checkbox } from "@mui/material";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router-dom";
export default function ProductComponent({data,title})
{
  var navigate=useNavigate()
  const theme = useTheme();
const matches_md = useMediaQuery(theme.breakpoints.down('md'));
const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
  var settings = {
                  
  infinite: true,
  speed: 500,
  slidesToShow: matches_sm?1:matches_md?2:4,
  slidesToScroll: 1,
  arrows:matches_md || matches_sm?false:true
 };

const handleClick=(item)=>{
  navigate('/propurscr',{state:{product:item}})

}
const AddSlider=()=>{
  return data.map((item)=>{
  return(<div onClick={()=>handleClick(item)}  style={{width:'100%'}}>
     <div style={{cursor:'pointer', width:'90%',background:'#121212',padding:10,display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center',borderRadius:10}}>
     <div style={{color:'#fff',marginLeft:'auto',padding:10}}>
     <Checkbox  icon={<FavoriteBorder style={{color:"#fff"}} />} checkedIcon={<Favorite  style={{color:"#fff"}} />} />
      
      </div> 
      <div style={{display:"flex", justifyContent:"center", alignItems:"center",  width:"65%", height:"200px"}}>
        <div style={{width:"auto", background:"red", height:"auto", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <img src={`${serverURL}/images/${item.productpicture}`}  style={{width:'100%', height:"100%"}}/></div></div>
      <div style={{display:'flex',justifyContent:'left',flexDirection:'column',height:"auto", width:'80%',marginTop:'5%'}}>
      <div style={{color:'#fff',fontWeight:600,fontSize:'1.3vw',height:100}}>{item.brandname} {item.productname} {item.modelno}</div>
      <div style={{display:'flex',flexDirection:'row',marginTop:'8%'}}>
      <div style={{color:'#fff',fontWeight:600,fontSize:'1.3vw'}}><s>&#8377;{item.price}</s></div>
       <div style={{color:'#fff',fontWeight:400,fontSize:'1vw'}}>&#8377;{item.offerprice}</div>
      </div>
      <Rating
     style={{marginTop:'5%'}} 
     name="simple-controlled"
      value={item.rating}
      
    />
      </div>
     </div>
   
     </div>
  )
  })
}

return(<div style={{width:'80%'}}>
<div style={{fontWeight:'bolder',fontSize:26,color:'#fff',margin:'10px 0px 10px 0px'}}>{title}</div>  
<Slider {...settings}>
  {AddSlider()}    
</Slider>
</div>)
}