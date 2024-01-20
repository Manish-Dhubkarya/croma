import { TextField,InputAdornment } from "@mui/material";
import Search from '@mui/icons-material/Search'
import { useState } from "react";
import { postData } from "../../services/FetchNodeServices";
import { useNavigate } from "react-router-dom";
export default function SearchComponent()
{
  var navigate=useNavigate()
  const [text, setText]=useState("")
  const fetchRecord=async()=>{
    var result=await postData("userInterface/product_filter", {text})
return result.data
  }
  const handleSearch=()=>{
  fetchRecord().then((response)=>{
    // alert("Hello"+JSON.stringify(response))
    navigate("/profilscr", {state:{result:response}})
  })
 
  }
    return(<div style={{display:'flex',background:'#fff',width:'70%',height:40,paddingLeft:10,paddingRight:10,borderRadius:3,alignItems:'center'}}>
        <TextField
  hiddenLabel
  placeholder="What are you looking for?" 
  onChange={(e)=>setText(e.target.value)}
  variant="standard"
  size="small"
  fullWidth
 
  InputProps={{
    disableUnderline: true,
    endAdornment: (
      <InputAdornment position="end">
        <Search style={{cursor:"pointer"}} onClick={handleSearch}/>
      </InputAdornment>
    ),
  }}
/>
    </div>)


}