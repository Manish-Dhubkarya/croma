import CartComponent from "../CartComponent";
import CheckoutComponent from "../CheckoutComponent";
import Header from "../../Header";
import { useStyles } from "./ProjectCss";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SmallScreenCartComponent from "../SmallScreenCartComponent";
import { useSelector } from "react-redux";
import MyAccountComponent from "../users/MyAccountComponent"
export default function Cart()
{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    var classes=useStyles()   
    return(<div className={classes.root}>
       <div>
        <Header/>
       </div>
       <div style={{width:'100%'}}>
        <MyAccountComponent/>
       </div>
     
    </div>)
}