import { AppBar, Box, Toolbar,Badge } from "@mui/material";
import Logo from "../../src/Assets/croma.gif";
import SearchComponent from "./components/SearchComponent";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

import React,{ useState, useEffect } from "react";
import { getData, serverURL } from "../services/FetchNodeServices";


import Drawer from '@mui/material/Drawer';
import { useNavigate } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useSelector } from "react-redux";

export default function Header(props) {
  var userData=JSON.parse(localStorage.getItem("User"))
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  var cart=useSelector(state=>state.mycart)    
  var navigate=useNavigate()
  var productCart=Object.values(cart)
  const [categories, setCategories] = useState([]);
 
  const [state, setState] = React.useState({
     
    left: false,
     
     
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {categories.map((text, index) => (
          <ListItem key={text.categoryid} disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <img src={`${serverURL}/images/${text.image}`} style={{width:30}}/>
              </ListItemIcon>
              <ListItemText primary={text.categoryname} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
        </Box>
  );




   

  const fetchCategories = async () => {
    var result = await getData("userinterface/display_all_category");
    setCategories(result.data);
  };

  useEffect(function () {
    fetchCategories();
  }, []);
 
  const handleCart=()=>{
    navigate('/cart')
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{
            backgroundImage:
              "url(https://media.croma.com/image/upload/v1697816449/Croma%20Assets/CMS/LP%20Page%20Banners/2023/Desktop_-_Navratri_opt.3_glsdyl.jpg)",
          }}
        >
          <Toolbar>
            <div
              style={{ width: 300, display: "flex", justifyContent: "right" }}
            >
              <img src={Logo} width="150" />
            </div>
            {matches ? (
              <></>
            ) : (
              <div style={{ marginLeft: "12%", width: "48%" }}>
                <SearchComponent />
              </div>
            )}
            <div
              style={{
                alignItems:"center",
                marginLeft: matches ? 100 : 0,
                display: "flex",
                width: 100,
                justifyContent: "space-between",
              }}
            >
              <div style={{display:"flex", flexDirection:"column"}}>
              <AccountCircle style={{ fontSize: 30 }} />
              <div style={{fontSize:10}}>{userData?.username}</div>
              </div>
              <Badge color="secondary" badgeContent={productCart?.length} showZero>
              <ShoppingCart onClick={handleCart} style={{cursor:"pointer", fontSize: 30 }} />
              </Badge>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <div
        style={{
          display: "flex",

          justifyContent: "center",
        }}
      >
        {matches ? (
          <div
            style={{
              width: "100%",
              margin: "5px 10px 5px 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
           
           <React.Fragment key={'left'}>
           
           <MenuIcon
               onClick={toggleDrawer('left', true)}
              style={{ color: "#fff" }}
            />
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
           sx={{'.css-4t3x6l-MuiPaper-root-MuiDrawer-paper':{
    backgroundColor: '#000',
    color: '#fff'}}}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>
           
         
          
          


            <SearchComponent />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
 