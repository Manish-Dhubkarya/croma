import Header from "../../Header"
import MainSlider from "../MainSlider";
import { useStyles } from "./ProjectCss";
import AddComponent from "../AddComponent";
import CircleComponent from "../CircleComponent";
import ProductComponent from "../ProductComponent";
import FestiveDealsComponent from "../FestiveDealsComponent"
// import Highlights from "../HighlightsComponent"
import { postData,getData } from "../../../services/FetchNodeServices";
import {useState,useEffect} from "react"
import MenuComponent from "../MenuComponent";
import TopBrand from "../../components/TopBrand";
export default function Home()
{   const classes = useStyles();
    const [banners,setBanners]=useState([])
    const [categories,setCategories]=useState([])
    const [productsDeals,setProductsDeals]=useState([])
    const [brands, setBrands]=useState([])
    const fetchDeals=async()=>{
      var result=await postData('userinterface/display_all_products_by_status',{status:'Trending'})
      setProductsDeals(result.data) 
     }
 

    const fetchBanners=async()=>{
     var result=await getData('userinterface/fetch_all_banner')
    setBanners((result.data[0].files).split(",")) 
    console.log(result.data)
    }

    const fetchCategories=async()=>{
      var result=await getData('userinterface/display_all_category')
      setCategories(result.data) 
     }
     const fetchBrands=async()=>{
      var result=await getData('userinterface/display_all_brands')
      setBrands(result.data) 
     }

    useEffect(function(){
      fetchBrands()
      fetchBanners()
      fetchCategories()
      fetchDeals()
    },[])
    return(<div className={classes.home_root}>
        <div style={{width:"100%", position:"fixed", zIndex:1}}>
        <Header/>
        <MenuComponent/></div>
        <div style={{display:'flex',justifyContent:'center', marginTop:"130px"}} >
            <MainSlider  banners={banners}/>
        </div>
        <div style={{display:'flex',justifyContent:'center',width:'100%',marginTop:5}}>
            <AddComponent/>
        </div>
        <div style={{display:'flex',justifyContent:'center',width:'100%',marginTop:20}}>
          <CircleComponent categories={categories}/>
        </div>
        <div style={{display:'flex',justifyContent:'center',width:'100%',marginTop:20}}>
        <FestiveDealsComponent/>
        </div>

        <div style={{display:'flex', justifyContent:'center',width:'100%',marginTop:20}}>
          <ProductComponent data={productsDeals} title={'Trending'}/>
        </div>
        <div style={{display:'flex', justifyContent:'center',width:'100%',marginTop:20}}>
          <TopBrand data={brands}/>
        </div>

    </div>)
}