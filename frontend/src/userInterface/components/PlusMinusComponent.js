import { Button,Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState,useEffect } from "react";
export default function PlusMinusComponent(props){
       const [count,setCount]=useState(0)
       useEffect(function(){
              setCount(props.value)
       },[props])
       const handleAdd=()=>{
       setCount((prev)=>{
                     if(prev<7)
                     { props.onChange(prev+1)
                    
                     return prev+1}
                     else 
                     { props.onChange(prev)
                         return prev}
                 })
              }
       
       const handleMinus=()=>{
           var c=count-1
           if(c>=0)
           {setCount(c)
           props.onChange(c)}
           }
           
       
       return(<div>
        {count==0?
        
        <div style={{ display:'flex', width:'100%' }}>
        <Button onClick={handleAdd} style={{ color: '#fff', borderColor: '#353535', borderRadius: 10, background: '#353535', borderColor: '#fff', padding: '6px 40px', textTransform: 'none', fontWeight: 'bold' }} variant="outlined">Add to Cart</Button>
        <Button  style={{ color: '#191919', borderColor: '#353535', background: '#12daa8',  marginLeft: '10px',borderRadius: 10, fontWeight: 'bold', padding: '6px 40px 6px 40px', textTransform: 'none' }} variant="outlined">Buy Now</Button>
       
        
       </div>
        
        :
        <div style={{display:'flex',alignItems:'center'}}>
        <div style={{padding:5,width:110,display:'flex',justifyContent:'space-between',alignItems:'center'}}>   
        <Fab onClick={handleMinus} style={{background:'rgb(18, 218, 168)',color:'#000'}} size="small" aria-label="add">
               <RemoveIcon fontSize="small"/>
        </Fab>
       
       <div style={{color:props.screen=="cart"?"#000":'#fff',fontSize:20,fontWeight:500}}>{count}</div>
       <Fab style={{background:'rgb(18, 218, 168)',color:'#000'}} size="small" onClick={handleAdd}  aria-label="add">
               <AddIcon fontSize="small"/>
        </Fab>        
        </div>
        {props.screen=="cart"?<></>:
        <Button style={{height:40, color: '#191919', borderColor: '#353535', background: '#12daa8',  marginLeft: '10px',borderRadius: 10, fontWeight: 'bold', textTransform: 'none' }} variant="outlined">Continue Shopping</Button>
        }
             </div>}
        </div>)
}