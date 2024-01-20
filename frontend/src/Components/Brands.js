import { useEffect, useState } from "react"
import { postData, getData } from "../services/FetchNodeServices"
import Swal from "sweetalert2"
import { TextField, Button, Avatar, Select, FormControl, InputLabel, MenuItem } from "@mui/material"
import Heading from "../services/Heading"
import BrandLogo from "../Assets/brands.png"
export default function Brands(){
    const fetchAllCategory=async()=>{
    var result=await getData("category/display_all_category")
    setCategoryList(result.data)
    }
    useEffect (function(){
        fetchAllCategory()
    },[])
    const handleImg=(event)=>{
        setLogo({bytes:event.target.files[0], filename:URL.createObjectURL(event.target.files[0])})
    }
    const fillAllCategory=()=>{
     return CategoryList.map((i)=>{
        return <MenuItem value={i.categoryid}>{i.categoryname}</MenuItem>
     })
    }
    const [logo, setLogo]=useState({bytes:"", filename:""})
    const [CategoryList, setCategoryList]=useState([])
    
    const handleSubmit=async()=>{
        
        var formData= new FormData()
        formData.append("brandname", brandname)
        formData.append("logo", logo.bytes)
        formData.append("categoryid", categoryId)

        var response=await postData("brands/submit_brands", formData)
        if(response.status)
    {
        Swal.fire({
            toast:true,
            icon: 'success',
            title: 'Brand',
            text: response.message,
          })
    }
    else{
        Swal.fire({
            toast:true,
            icon: 'error',
            title: 'Oops...',
            text: response.message,
          })
    }

    }
    const handleReset=()=>{
        setBrandName("")
        setLogo({bytes:"", filename:""})
    }
    const[brandname, setBrandName]=useState("")
    const[categoryId, setCategoryId]=useState("")
    return(
        <div style={{padding:10, display:"flex", flexDirection:"column", width:"30%", borderRadius:10, alignItems:"center", background:"#ece6ff"}}>
        <Heading image={BrandLogo} caption="New Brands" link="/dashboard/displayallbrands"/>    
        <FormControl size="small" style={{marginTop:40, marginBottom:20}} fullWidth>
  <InputLabel>Category</InputLabel>
  <Select
    value={categoryId}
    label="Category"
    onChange={(e)=>setCategoryId(e.target.value)}
  >
    {fillAllCategory()}
  </Select>
</FormControl>

        <TextField onChange={(event)=>setBrandName(event.target.value)} style={{marginBottom:20, }} size="small" fullWidth label="Brand Name"/>
        <div style={{display:"flex", marginBottom:20, flexDirection:"row", width:"80%", justifyContent:"space-between", alignItems:"center"}}>
        <Button component="label" size="small" style={{color:"#00b22c"}} variant="outlined">
         <input onChange={handleImg} hidden type="file" accept="images/*" multiple/>
         Brand Image
         </Button>
         <Avatar src={logo.filename} alt="Brands" variant="circle"/>
        </div>
        <div style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"space-between"}}>
        <Button onClick={handleSubmit} size="small" style={{width:"30%", color:"#00b22c"}} variant="outlined">Submit</Button>
        <Button onClick={handleReset} size="small" style={{width:"30%", color:"#00b22c"}} variant="outlined">Reset</Button>
        </div>
        </div>
        )
}