import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serverURL } from "../../services/FetchNodeServices";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Checkbox, useMediaQuery } from "@mui/material";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { makeStyles } from "@mui/styles";
import {useState,useEffect} from 'react'
const useStyles = makeStyles({
    carouselDots: {
        '& .slick-dots li.slick-active button:before': {
            color: '#fff',
            opacity: 1
        },
        '& .slick-dots li button::before': {
            fontSize: '7px',
            color: '#fff',
            opacity: 0.4
        },
        '& .slick-dots li': {
            margin: '2% -2px'
        }
    }
});

function ProductVerticalImageSlider(props) {
    var product=props.product
    const matches = useMediaQuery('(max-width:800px)')
    const matches_sm = useMediaQuery('(max-width:400px)')
    const classes = useStyles()
    var data = product?.picture.split(",")
    const [image,setImage]=useState('')

    useEffect(function(){
      setImage(data[0])

    },[props])

    var settings = {
        dots: matches ? true : false,
        infinite: true,
        speed: 500,
        slidesToShow: matches ? 1 : 4,
        slidesToScroll: 1,
        focusOnSelect: false,
        arrows: matches ? false : true,
    }

    const handleImageChange=(item)=>{
      setImage(item)

    }

    const showSlider = () => {
        return data.map((item) => {
            return (<div onClick={()=>handleImageChange(item)} style={{ width: '100%' }}>
                <img src={`${serverURL}/images/${item}`} style={{ borderRadius: '5px', border: matches ? '' : '0.5px solid #9A9A9A', transform: matches ? '' : 'rotate(-90deg)' }} width="90%" height="90%"></img>
            </div>)
        })
    }


    return (
        <div style={{ width: matches ? '95%' : '100%', display: 'flex', flexDirection: matches ? 'column' : 'row', position: matches ? 'none' : 'sticky', top: 65 }}>

            <div style={{ width: matches ? '100%' : '60%', transform: matches ? 'rotate(0deg)' : 'rotate(90deg)', marginLeft: matches ? '' : 'auto', marginRight: matches ? '' : '5%', marginTop: matches ? '' : '5%' }}>

                {matches ? <div style={{ width: '100%', display: 'flex', marginTop: '3%', backgroundColor: '' }}>
                    <div style={{ marginLeft: 'auto' }}><Checkbox style={{ color: '#fff' }} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></div>
                    <div><ShareOutlinedIcon style={{ color: '#fff', marginLeft: '10px', marginTop: '10px' }} /></div>
                </div> : <></>
                }

                {matches ?
                    <></>
                    : <div style={{ transform: matches ? 'none' : 'rotate(-90deg)', width: '100%', display: 'flex', justifyContent: 'right' }}>
                        <img src={`${serverURL}/images/${image}`} width="80%" height="80%" />
                    </div>
                }

                <div style={{ width: '100%', display: matches ? 'flex' : '', justifyContent: matches ? 'center' : '' }}>
                    <Slider {...settings} className={classes.carouselDots} style={{ width: matches ? '50%' : '' }}>
                        {showSlider()}
                    </Slider>
                </div>
            </div>

            {matches ? <></> : <div style={{ width: '15%', display: 'flex', marginTop: '3%' }}>
                <div><Checkbox style={{ color: '#fff'}} icon={<FavoriteBorder style={{fontSize:'2vw'}}/>} checkedIcon={<Favorite />} /></div>
                <div><ShareOutlinedIcon style={{ color: '#fff', marginLeft: '10px', marginTop: '10px',fontSize:'2vw' }} /></div>
            </div>
            }
        </div>
    )
}

export default ProductVerticalImageSlider