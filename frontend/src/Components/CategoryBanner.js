import { makeStyles } from "@mui/styles"
import {Paper, Select, MenuItem, FormControl, InputLabel, Grid, Button } from "@mui/material"
import { DropzoneArea } from "material-ui-dropzone"
import Heading from "../services/Heading"
import categoryIcon from "../Assets/electronics.jpg"
import { useState } from "react"
import { useEffect } from "react"
import { getData, postData } from "../services/FetchNodeServices"
import Swal from "sweetalert2"

const useStyles = makeStyles({
    categorybannerRoot: {
        height: '99vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        background: '#f2f2f2',
    },
    categorybannerBox: {
        height: 430,
        width: '50%',
      
        marginTop: 10,
        padding: 10,
        borderRadius: 10
    }
})
function CategoryBanner() {
    const classes = useStyles()
    const [files, setFiles] = useState([])
    const [categoryList, setCategoryList] = useState([])
    const [categoryId, setCategoryId] = useState('')
    const [brandList, setBrandList] = useState([])
    const [brandId, setBrandId] = useState('')
    const [errors,setErrors]=useState({})

    const handleError=(val,label)=>{
        setErrors((prev)=>({...prev,[label]:val}))
    }

    async function fetchAllCategory() {
        var response = await getData('category/display_all_category')
        setCategoryList(response.data)
    }

    useEffect(function () {
        fetchAllCategory()
    }, [])

    const fillCategory = () => {
        return categoryList.map((item) => {
            return <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>
        })
    }

    const handleCategoryChange = (event) => {
        setCategoryId(event.target.value)
        fetchAllBrand(event.target.value)
    }

    const fetchAllBrand = async (cid) => {
        var response = await postData('brands/fetch_brands_by_category', { categoryid: cid })
        setBrandList(response.data)
    }

    const fillBrand = () => {
        return brandList.map((item) => {
            return <MenuItem value={item.brandid}>{item.brandname}</MenuItem>
        })
    }

    const handleSubmit=async ()=>{
        var formData=new FormData()
        formData.append('categoryid',categoryId)
        formData.append('brandid',brandId)
        files.map((file,index)=>{
            formData.append('picture'+index,file) 
        })
        var response=await postData('categorybanner/submit_categorybanner',formData)
        if(response.status===true){
            Swal.fire({
                icon:'success',
                title:response.message,
                toast:true
            })
        }
        else{
            Swal.fire({
                icon:'error',
                title:response.message,
                toast:true
            })
        }
    }

    return (<div className={classes.categorybannerRoot}>
        <Paper elevation={3} className={classes.categorybannerBox}>
            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <Heading caption="Add Category Banner" image={categoryIcon} link="#" />
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select
                            value={categoryId}
                            label="Category"
                            onFocus={()=>handleError('','categoryId')}
                            onChange={handleCategoryChange}
                        >
                            {fillCategory()}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Brand</InputLabel>
                        <Select
                            value={brandId}
                            label="Brand"
                            onFocus={()=>handleError('','brandId')}
                            onChange={(event)=>setBrandId(event.target.value)}
                        >
                            {fillBrand()}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <DropzoneArea
                        filesLimit={7}
                        onFocus={()=>handleError('','files')}
                        onChange={(files) => setFiles(files)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" fullWidth onClick={handleSubmit}>Submit</Button>
                </Grid>
            </Grid>
        </Paper>
    </div>)
}

export default CategoryBanner