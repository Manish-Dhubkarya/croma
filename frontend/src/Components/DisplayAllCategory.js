import MaterialTable from "@material-table/core";
import React from "react";
import {Avatar, TextField} from "@mui/material";
import Swal from "sweetalert2";
import Category from "../Assets/electronics.jpg"
import { useState, useEffect } from "react";
import { getData, serverURL, postData } from "../services/FetchNodeServices";
import { Dialog, Button, DialogActions} from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useNavigate } from "react-router-dom";
export default function DisplayAllCategory(){
  var navigate=useNavigate()
  const validation=()=>{
    var error=false
    if(catName.length==0)
    {
        error=true
        handleError("Plz input category...!","categoryname")
    }
    if(img.filename.length==0)
    {
        error=true
        handleError("Plz select image...!", 'image')
    }
    return error
}
const handleEditCategory=async()=>{
  var error=validation()
    console.log(errors)
    if(error==false)
    {
    var body= {categoryid:catId, categoryname:catName}
    var response=await postData("category/update_category", body)
    if(response.status)
{
    Swal.fire({
        toast:true,
        icon: 'success',
        title: 'Category',
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
fetchAllcategory()
}
const handleEditPicture=async()=>{
  setStatusBtn(false)
    var error=validation()
    console.log(errors)
    if(error==false)
    {
    var formData= new FormData()
    formData.append("categoryid", catId)
    formData.append("image", img.bytes)
    var response=await postData("category/update_category_picture", formData)
    if(response.status)
{
    Swal.fire({
        toast:true,
        icon: 'success',
        title: 'Category',
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
fetchAllcategory()
}
}
const [catName, setCatName]=useState("")
const [catId, setCatId]=useState("")
const [img, setImg]=useState({bytes:"", filename:""})
const [errors, seterror]=useState({})
const [statusCamera, setStatusCamera]=useState(false)
const [statusBtn, setStatusBtn]=useState(false)
const [temPic, setTempic]=useState("")
const handleError=(error, label)=>{
 seterror((prev)=>({...prev,[label]:error}))
}
const handleImg=(event)=>{
    setImg({bytes:event.target.files[0], filename:URL.createObjectURL(event.target.files[0])})
    setStatusBtn(true)
}
  const [open, setOpen] = React.useState(false);
  
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
        var result=await postData("category/delete_category", {categoryid:rowData.categoryid})
       if(result.status)
       { Swal.fire(
          'Deleted!',
          'Category has been deleted.',
          'success'
        )
        fetchAllcategory()}
        else{
          Swal.fire(
            'Fail!',
            'Fail to delete',
            'fail')
        }
      }
    })
  }
  const handleOpen=(rowData)=>{
    setCatId(rowData.categoryid)
    setCatName(rowData.categoryname)
    setImg({filename:`${serverURL}/images/${rowData.image}`, bytes:""})
    setTempic(`${serverURL}/images/${rowData.image}`)
    setOpen(true)
    setStatusBtn(false)
  }
  const handleCancleImg=()=>{
    setImg({filename:temPic, bytes:""})
    setStatusBtn(false)
  }
    const fetchAllcategory=async()=>{
        var response=await getData("category/display_all_category")
        setCategory(response.data)
    }
    useEffect(function(){
   fetchAllcategory()
    },[])
    const [category, setCategory]=useState([])
   function SaveCancleBtn(){
    return(
      <div>
<Button onClick={handleEditPicture}>Save</Button>
<Button onClick={handleCancleImg}>cancle</Button>
</div>)
   }
  function ShowCategoryDialog() {
      
      return (
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <div style={{padding:30, margin:10, display:"flex", width:400, flexDirection:"column", borderRadius:10, alignItems:"center", background:"#ece6ff"}}>
    <span  style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>Update Category</span>
    <TextField value={catName}  error={errors.categoryname} onFocus={()=>handleError(null,"categoryname")} helperText={errors.categoryname} onChange={(event)=>setCatName(event.target.value)} style={{marginBottom:20}} size="small" fullWidth label="Category Name"/>
    <div style={{display:"flex", marginBottom:20, flexDirection:"row", width:"80%", justifyContent:statusBtn?"space-evenly":"center", alignItems:"center"}}>
   {statusBtn==true?<SaveCancleBtn/>:<></>} 
    <Button onMouseLeave={()=>setStatusCamera(false)} onMouseEnter={()=>setStatusCamera(true)} onFocus={()=>handleError(null, "image")} component="label" size="large" style={{color:"#00b22c", position:"relative"}} variant="outlined">
    {statusCamera==true?<CameraAltIcon style={{position:"absolute", width:40, height:40, color:"#e37f06", zIndex:1, left:82, top:55}}/>:<></>}
     <input onChange={handleImg} hidden type="file" accept="images/*" multiple/>
     <Avatar src={img.filename} alt="Category" style={{width:65, height:65}} variant="circle"/>
     </Button>
     <div style={{fontSize:13, color:"red"}}>{errors.image}</div>
    </div>
    <div style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"space-between"}}>
    </div>
    </div>
            <DialogActions>
              <Button onClick={handleEditCategory}>Edit Data</Button>
              <Button onClick={handleClose} autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }

    return(
     
        <div style={{width:"60%", padding:10, background:"#D4F1F4", borderRadius:10, justifyContent:"center"}}>
    <MaterialTable
      title= {<div style={{display:"flex", flexDirection:"row", margin:20, justifyContent:"space-between", width:"100%"}}>
      <div>
          <img src={Category} width={80}/>
          <div style={{fontFamily: 'Kalam', fontWeight:"bold"}}>
          Category List
      </div>
      </div></div>}
      columns={[
        { title: 'Category Id', field: 'categoryid'},
        { title: 'Category Name', field: 'categoryname' },
        { title: 'Image', render:(rowData)=><img style={{width:50}} src={`${serverURL}/images/${rowData.image}`}/>},
      ]}
      data={category}
      actions={[
        {
          icon: 'edit',
          tooltip:'EDIT CATEGORY',
          onClick: (event, rowData) =>{handleOpen(rowData)}
        },
        {
          icon: 'delete',
          tooltip:'DELETE CATEGORY',
          onClick: (event, rowData) =>{handleDelete(rowData)}
        },
        {
          icon: 'add',
          tooltip: 'Add User',
          isFreeAction: true,
          onClick: (event) => navigate("/dashboard/category")
        }
      ]}
    />
   {open==true? ShowCategoryDialog():<></>}
        </div>
    )
}