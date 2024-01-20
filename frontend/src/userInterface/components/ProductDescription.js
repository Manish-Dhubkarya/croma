import StarIcon from '@mui/icons-material/Star';
import { Button, Divider, useMediaQuery } from '@mui/material';
import {postData, serverURL } from '../../services/FetchNodeServices'
import {useState,useEffect} from 'react'
import parse from 'html-react-parser';
import PlusMinusComponent from '../components/PlusMinusComponent';
import { useDispatch, useSelector } from 'react-redux';
import ProductColorDetails from '../components/ProductColorDetails';

function ProductDescription(props) {
    const matches = useMediaQuery('(max-width:800px)')
    const matches_sm = useMediaQuery('(max-width:400px)')
    
    var dispatch=useDispatch()
    //var product=props.product
    var cart=useSelector(state=>state.mycart)
    var keys=Object.keys(cart)
    console.log("KEYS",keys)
    var product=props.product
    if(keys.length==0)
     {  
      
        product['qty']=0
       }
     else                 
     { 
        
        if(keys.includes(product.productdetailid+""))
        {  
            product=cart[product.productdetailid+""]
        }
        else
        { 
            product['qty']=0
        }


     }  

     
     //alert(JSON.stringify(props.product))

    
    
    
   
    
  
     
     

     const handleQtyChange=(value)=>{
        if(value<=0)
        {
       dispatch({type:'REMOVE_PRODUCT',payload:[product.productdetailid,product]})
        }
        else{
       product['qty']=value
       dispatch({type:'ADD_PRODUCT',payload:[product.productdetailid,product]})
        }
       props.setRefresh(!props.refresh)
     
    }

    return (
        <div style={{ width: matches ? '95%' : '80%' }}>
            <div style={{ width: '100%', color: '#fff', fontWeight: 500, fontSize: '20px', marginTop: '20px' }}>
                {product.brandname} {product.productname} {product.modelno}
            </div>

            <div style={{ width: '100%', marginTop: '2%' }}>
                <span style={{ borderRadius: '20px', color: '#088466', background: '#cffff3', padding: '6px 16px', fontWeight: 800, fontSize: '12px' }}>2000 off on payment otp page</span>
                <span style={{ borderRadius: '20px', color: '#088446', background: '#cffff3', padding: '6px 16px', fontWeight: 800, marginLeft: '10px', fontSize: '12px' }}>9 month cost EMI</span>
            </div>

            <div style={{ color: '#12daa8', marginTop: '2%', fontWeight: 400, fontSize: '14px' }}>
                4.5<StarIcon style={{ fontSize: '16px' }} />(<u>59 Rating & Reviews</u>)
            </div>

            <div style={{ width: '100%', color: 'white', fontSize: '26px', fontWeight: 'bold', marginTop: '3%' }}>
                {product.offerprice>0?<div>&#8377;{product.offerprice} <s>&#8377;{product.price}</s> </div>:<div>&#8377;{product.price}</div>}

                <div style={{ fontSize: '12px' }}>(Incl. all Taxes)</div>
            </div>

            <div style={{ width: '100%', color: 'white', fontSize: '12px', fontWeight: 'bold', marginTop: '3%' }}>
                Color
            </div>
             <div  style={{display:'flex',flexDirection:'row',gap:10}}>
             <ProductColorDetails setRefresh={props.setRefresh} refresh={props.refresh} setProduct={props.setProduct} product={props.product} />
            </div>   
            <div  style={{display:'flex',flexDirection:'row',gap:10,marginTop:'5%'}}>
                <PlusMinusComponent value={product?.qty} onChange={handleQtyChange}/>
            </div>    
            

            <div style={{ width: '100%', color: 'white', fontSize: '16px', fontWeight: 'bold', marginTop: '3%' }}>
                <div>Super Saving (2 OFFERS)</div>
                <Divider style={{ marginTop: '4px', border: '1px solid white' }} />
                <div style={{ marginTop: '10px' }}><img src={`${serverURL}/images/offer.webp`} height="100%" width="100%" /></div>


                <div style={{ color: 'white', fontSize: '14px', borderRadius: '10px', fontWeight:matches?400:'bold', marginTop: '3%', border: '2px solid #353535', padding: '20px 47px 5px 16px' }}>
                    {parse(product.description)}
                </div>
            </div>

        </div >
    )
}

export default ProductDescription