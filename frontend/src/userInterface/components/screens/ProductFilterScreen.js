import Header from "../../Header"
import { useStyles } from "./ProjectCss"
import FeaturedComponent from "../FeaturedComponent"
import CategoriesComponent from "../CategoriesComponent"
import PriceComponent from "../PriceComponent"
import BrandComponent from "../BrandComponent"
import ProductInfo from "../ProductInfo"
import { useMediaQuery } from "@mui/material"
import FilterListIcon from '@mui/icons-material/FilterList';
import ListIcon from '@mui/icons-material/List'
import { useLocation } from "react-router-dom"

function ProductFilterScreen() {
    const classes = useStyles()
    var location=useLocation()
    var data=location?.state?.result
    
    const matches=useMediaQuery('(max-width:800px)')
    const matches_sm=useMediaQuery('(max-width:400px)')
   const showProducts=()=>{
    return data.map((item)=>{
     return <ProductInfo item={item}/>

    })

   }

    return (
        <div className={classes.ProductScreen_Root}>
            <div style={{ position: 'sticky', top: 0, zIndex: 2 }}>
                <Header />
            </div>
               
            
            <div className={classes.ProductScreen_Main_Box}>
                {matches?
                <></>:<div className={classes.ProductScreen_Box1}>
                    <div style={{ width: '99.5%', display: 'flex', justifyContent: 'right', marginTop: '10px' }}>
                        <div style={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <FeaturedComponent />
                            <CategoriesComponent />
                            <PriceComponent />
                            <BrandComponent />
                        </div>
                    </div>

                    <div style={{ width: '0.5%', backgroundColor: 'white',opacity:0.2 }}></div>
                </div>
                }
                <div className={classes.ProductScreen_Box2} style={{width:matches?'100%':'75%'}}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontSize: matches_sm?'4vw':matches?'3vw':'2vw', marginLeft: '0.5%', marginTop: '0.5%', fontWeight: 500 }}>
                        Best Deals on ACs
                    </div>
                     {showProducts()}
                </div>
            </div>
            {matches?
            <div style={{width:'auto',padding:'2vh',position:'sticky',overflow:'hidden',bottom:0,color:'white',background:'#353535',display:'flex',alignItems:'center'}}>
                    <div style={{fontSize:'17px',fontWeight:'bold',width:'50%',display:'flex',justifyContent:'center',borderRight:'1px solid white'}}><ListIcon />Sort</div>
                    <div style={{fontSize:'17px',fontWeight:'bold',width:'50%',display:'flex',justifyContent:'center'}}><FilterListIcon />Filter</div>
            </div>:<></>}
        </div>)
}

export default ProductFilterScreen