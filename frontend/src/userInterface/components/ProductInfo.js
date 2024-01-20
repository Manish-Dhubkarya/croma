import { serverURL } from '../../services/FetchNodeServices'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Divider, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    truncate: {
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        boxOrient: 'vertical',
        '-moz-box-orient': 'vertical',
        '-ms-flex-direction': 'column',
        'flex-direction': 'column',
    }
});

function ProductInfo(props) {
    const classes=useStyles()
    const matches=useMediaQuery('(max-width:800px)')
    const matches_sm=useMediaQuery('(max-width:400px)')
    var item=props.item
    console.log(item)
    return (
        <div style={{width:matches?'100%':'90%'}}>
            <div style={{ width: '100%', display: 'flex' }}>
                <div style={{ width: matches_sm?'50%':'30%', display: 'flex', justifyContent: 'center',alignItems:'center' }}>
                    <img src={`${serverURL}/images/${item.mainpicture}`} height="85%" width="85%" ></img>
                </div>
                <div style={{ width:matches_sm?'50%':'70%', color: '#fff',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ fontSize:matches?'14px':'1.4vw', fontWeight: 500 }} className={classes.truncate}>
                            {item.brandname} {item.productname} {item.modelno}
                        </div>
                        <div>
                            <Checkbox style={{ color: '#fff' }} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                        </div>
                    </div>
                    <div style={{ fontSize: matches?'14px':'1.7vw', fontWeight: 500,marginTop:matches?'10px':0}}>
                        &#8377;{item.offerprice}
                    </div>
                    <div style={{ fontSize: 12 }}>
                        (Incl. all Taxes)
                    </div>
                    <div style={{marginTop:'2%'}}>
                        <span style={{ color: '#9A9A9A', fontSize: matches?'12px':'14px',textDecoration:'line-through' }}>MRP:&#8377;{item.price}</span>
                        <span style={{ color: '#9A9A9A', fontSize: matches?'10px':'12px', marginLeft: '2%' }}>(Save &#8377;{item.price-item.offer})</span>
                        <span style={{ fontSize: matches_sm?'9px':matches?'12px':'14px', border: '0.5px solid grey', borderRadius: '5px', background: '#191919', padding: matches_sm?'3px 4px 3px 5px':'7px 10px 7px 11px', marginLeft: '2%', fontWeight:'bold' }}>
                            48% Off
                        </span>
                    </div>
                </div>
            </div>
            <Divider style={{backgroundColor:'white',marginTop:'10px',marginLeft:'10px',opacity:'0.2',margin:matches_sm?'5%':matches?'3%':'1%'}}></Divider>
        </div>
    )
}

export default ProductInfo