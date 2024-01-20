import { useNavigate } from "react-router-dom"
import { serverURL } from "../services/FetchNodeServices"
import { getData, postData } from "../services/FetchNodeServices";
import {FormControl, Select, InputLabel, MenuItem} from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {Avatar} from "@mui/material";
import Swal from "sweetalert2"
import MaterialTable from "@material-table/core"
import { useEffect } from "react"
import { Button, Dialog, DialogActions, TextField } from "@mui/material"
import BrandLogo from "../Assets/brands.png"
import { useState } from "react"
export default function DisplayAllBrands(){
const [brandName, setBrandName]=useState("")
const [brandId, setBrandId]=useState("")
const [img, setLogo]=useState({bytes:"", filename:""})
const [errors, seterror]=useState({})
const [statusCamera, setStatusCamera]=useState(false)
const [statusBtn, setStatusBtn]=useState(false)
const [temPic, setTempic]=useState("")
const [open, setOpen] =useState(false);
const [brands, setBrands]=useState([])
const [CategoryList, setCategoryList]=useState([])
const [CategoryId, setCategoryId]=useState("")
const handleError=(error, label)=>{
 seterror((prev)=>({...prev,[label]:error}))
}
const fillAllCategory=()=>{
  return CategoryList.map((i)=>{
     return <MenuItem value={i.categoryid}>{i.categoryname}</MenuItem>
  })
 }
const fetchAllCategory = async () => {
  var response = await getData('category/display_all_category')
  setCategoryList(response.data)
}
const handleImg=(event)=>{
    setLogo({bytes:event.target.files[0], filename:URL.createObjectURL(event.target.files[0])})
    setStatusBtn(true)
}
var navigate=useNavigate()
    const handleEditBrands=async()=>{
          
          var body= {brandid:brandId, brandname:brandName, categoryid:CategoryId}
          var response=await postData("brands/update_brands", body)
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
      fetchAllBrands()
      }
    const handleOpen=(rowData)=>{
        setBrandId(rowData.brandid)
        setBrandName(rowData.brandname)
        setCategoryId(rowData.categoryid)
        setLogo({filename:`${serverURL}/images/${rowData.logo}`, bytes:""})
        setTempic(`${serverURL}/images/${rowData.logo}`)
        setOpen(true)
        setStatusBtn(false)
      }
      const handleClose = () => {
        setOpen(false);
      };
      const handleDelete=(rowData)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async(result) => {
      if (result.isConfirmed) {
        var result=await postData("brands/delete_brand", {brandid:rowData.brandid})
       if(result.status)
       { Swal.fire(
          'Deleted!',
          'Brand has been deleted.',
          'success'
        )
        fetchAllBrands()}
        else{
          Swal.fire(
            'Fail!',
            'Fail to delete',
            'fail')
        }
      }
    })
  }
  function ShowBrandsDialog() {
      
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div style={{padding:30, margin:10, display:"flex", width:400, flexDirection:"column", borderRadius:10, alignItems:"center", background:"#ece6ff"}}>
  <span  style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>Update Brands</span>
  <FormControl size="small" style={{marginTop:40, marginBottom:20}} fullWidth>
  <InputLabel>Category</InputLabel>
  <Select
    value={CategoryId}
    label="Category"
    onChange={(e)=>setCategoryId(e.target.value)}
  >
    {fillAllCategory()}
  </Select>
</FormControl>
  <TextField value={brandName} onChange={(event)=>setBrandName(event.target.value)} style={{marginBottom:20}} size="small" fullWidth label="Brand Name"/>
  <div style={{display:"flex", marginBottom:20, flexDirection:"row", width:"80%", justifyContent:statusBtn?"space-evenly":"center", alignItems:"center"}}>
 {statusBtn==true?<SaveCancleBtn/>:<></>} 
  <Button onMouseLeave={()=>setStatusCamera(false)} onMouseEnter={()=>setStatusCamera(true)} onFocus={()=>handleError(null, "logo")} component="label" size="large" style={{color:"#00b22c", position:"relative"}} variant="outlined">
  {statusCamera==true?<CameraAltIcon style={{position:"absolute", width:40, height:40, color:"#e37f06", zIndex:1, left:82, top:55}}/>:<></>}
   <input onChange={handleImg} hidden type="file" accept="images/*" multiple/>
   <Avatar src={img.filename} alt="Category" style={{width:65, height:65}} variant="circle"/>
   </Button>
   <div style={{fontSize:13, color:"red"}}>{errors.logo}</div>
  </div>
  <div style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"space-between"}}>
  </div>
  </div>
          <DialogActions>
            <Button onClick={handleEditBrands}>Edit Data</Button>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
      const handleEditPicture=async()=>{
        setStatusBtn(false)
          var formData= new FormData()
          formData.append("brandid", brandId)
          formData.append("logo", img.bytes)
          var response=await postData("brands/update_brands_logo", formData)
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
      fetchAllBrands()
      
      }
      function SaveCancleBtn(){
        return(
          <div>
    <Button onClick={handleEditPicture}>Save</Button>
    <Button onClick={handleCancleImg}>cancle</Button>
    </div>)
       }
      const handleCancleImg=()=>{
        setLogo({filename:temPic, bytes:""})
        setStatusBtn(false)
      }
        const fetchAllBrands=async()=>{
            var response=await getData("brands/display_all_brands")
            setBrands(response.data)
        }
        useEffect(function(){
       fetchAllBrands()
       fetchAllCategory()
        },[])
    return(
        <div style={{width:"60%", padding:10, background:"#D4F1F4", borderRadius:10, justifyContent:"center"}}>
    <MaterialTable
      title= {<div style={{display:"flex", flexDirection:"row", margin:20, justifyContent:"space-between", width:"100%"}}>
      <div>
          <img src={BrandLogo} width={80}/>
          <div style={{fontFamily: 'Kalam', fontWeight:"bold"}}>
          Brands List
      </div>
      </div></div>}
      columns={[
        { title: 'Brand Id', field: 'brandid'},
        { title: 'Brands Name', field: 'brandname' },
        {title:"Category",
        render:(rowData)=> <div>{rowData.categoryid}/{rowData.categoryname}</div>
      },
        { title: 'Image', render:(rowData)=><img style={{width:50}} src={`${serverURL}/images/${rowData.logo}`}/>},
      ]}
      data={brands}
      actions={[
        {
          icon: 'edit',
          tooltip:'EDIT BRANDS',
          onClick: (event, rowData) =>{handleOpen(rowData)}
        },
        {
          icon: 'delete',
          tooltip:'DELETE BRANDS',
          onClick: (event, rowData) =>{handleDelete(rowData)}
        },
        {
          icon: 'add',
          tooltip: 'Add User',
          isFreeAction: true,
          onClick: (event) => navigate("/dashboard/brands")
        }
      ]}
    />
   {open==true? ShowBrandsDialog():<></>}
        </div>
   
    )
}