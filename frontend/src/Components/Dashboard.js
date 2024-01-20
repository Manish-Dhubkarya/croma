import * as React from 'react';
import { Grid, Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import CategoryIcon from '@mui/icons-material/Category';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { serverURL } from '../services/FetchNodeServices';
import PanoramaIcon from '@mui/icons-material/Panorama';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { Route,Routes } from 'react-router-dom';
import Category from './Category';
import DisplayAllCategory from "./DisplayAllCategory";
import Brands from "./Brands"
import DisplayAllBrands from './DisplayAllBrands';
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import DisplayAllProductDetails from "./DisplayAllProductDetails";
import DisplayAllProducts from "./DisplayAllProducts"
import Banner from "./Banner"
import CategoryBanner from "./CategoryBanner"
import { useNavigate } from 'react-router-dom';
var useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100%",
        display: 'flex',
        padding: 0,
        margin: 0,
        justifyContent: 'left',
        alignItems: 'center'
    },
    box: {
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'start'
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


const useStylesTextField = makeStyles((theme) => ({
    roundedTextField: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 15
        },
    },
}))


export default function Dashboard() {
    var admin=JSON.parse(localStorage.getItem("ADMIN"))
    var navigate=useNavigate()
    const classes = useStylesTextField();

    const useStyle = useStyles()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }


    const listItems = [
        {
            icon: <LeaderboardIcon />,
            title: 'Dashboard',
            link: ''
        },
        {
            icon: <CategoryIcon />,
            title: 'Categories',
            link: '/dashboard/displayallcategory'
        },
        {
            icon: <StoreIcon />,
            title: 'Brands',
            link: '/dashboard/displayallbrands'
        },
        {
            icon: <ShoppingCartIcon />,
            title: 'Products',
            link: '/dashboard/displayallproducts'
        },
        {
            icon: <ShoppingCartIcon />,
            title: 'Specification',
            link: '/dashboard/displayallproductdetails'
        },
        {
            icon: <PanoramaIcon />,
            title: 'Banners',
            link: '/dashboard/banner'
        },
        {
            icon: <PermMediaIcon />,
            title: 'Category Banners',
            link: '/dashboard/categorybanner'

        }
    ]

    return (
        <div className={useStyle.root}>
            <div className={useStyle.box}>
                <Grid container spacing={3} style={{ width: '100%' }}>
                    <Grid item xs={2} style={{ background: '#F9FAFB', padding: '3% 2%', borderRight: '1px solid gainsboro', height: '100vh', position: "relative" }}>

                        <Grid style={{ background: '#EDEFF1', borderRadius: '15px', display: "flex",  flexDirection:'column', padding: '5%' }}>
                            <div style={{display:'flex', width:180,justifyContent:'center', alignItems:'center',}}>
                            <img src={`${serverURL}/images/${admin.picture}`} style={{ width: 40, height: 40, borderRadius: '50%', marginRight: '3%' }} />
                            <span style={{ fontSize: '15px', fontWeight: '500' }}>{admin.username}</span>
                            </div>
                          
                            <div style={{ fontSize:10,display:'flex', width:180,justifyContent:'center', alignItems:'center',}}>
                                {admin.emailid}
                            </div>

                        </Grid>

                        <Grid style={{ marginTop: '10%' }}>
                            <List sx={{ width: '100%', maxWidth: 360 }}
                                component="nav">
                                {listItems.map((item, i) => {
                                    return (
                                        <ListItemButton onClick={()=>navigate(item.link)}>
                                            <ListItemIcon>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText style={{ opacity: '80%' }}>{item.title}</ListItemText>
                                        </ListItemButton>
                                    )
                                })}
                            </List>
                        </Grid>

                          </Grid>

                    <Grid item xs={10} style={{ background: 'white', padding: '3% 1%', height: '100vh' }}>
                        <Grid container spacing={2}>
                            <Grid item md={10}>
                                <TextField variant="outlined" fullWidth className={classes.roundedTextField} label="Search" />
                            </Grid>
                            <Grid item md={2} style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                                <Badge badgeContent={9} color="success" style={{ marginRight: '8%' }}>
                                    <EmailIcon color="action" style={{ width: 25, height: 25 }} />
                                </Badge>
                                <Badge badgeContent={4} color="error" style={{ marginRight: '8%' }}>
                                    <NotificationsIcon color="action" style={{ width: 25, height: 25 }} />
                                </Badge>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 7px rgba(0,0,0,0.25))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&:before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <PersonIcon />
                                        </ListItemIcon>
                                        My account
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        Add another Admin
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleClose} style={{ color: '#ff5028' }}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" style={{ color: '#ff5028' }} />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                                <img className='profileImg' src={`${serverURL}/images/${admin.picture}`} style={{ width: 35, height: 35, borderRadius: '50%' }} onClick={handleClick} />
                            </Grid>
                        </Grid>
                        
                        <Grid style={{display:"flex", justifyContent:"center", height:"100%", alignItems:"center"}} item xs={12}>
                     <Routes>
        <Route element={<Category/>} path="/category"/>
        <Route element={<DisplayAllCategory/>} path="/displayallcategory"/>
        <Route element={<Brands/>} path="/brands"/>
        <Route element={<Products/>} path="/products"/>
        <Route element={<DisplayAllProducts/>} path="/displayallproducts"/>
        <Route element={<DisplayAllBrands/>} path="/displayallbrands"/>
        <Route element={<ProductDetails/>} path="/productdetails"/>
        <Route element={<DisplayAllProductDetails/>} path="/displayallproductdetails"/>
        <Route element={<Banner/>} path="/banner"/>
        <Route element={<CategoryBanner/>} path="/categorybanner"/>
        </Routes>       
                        </Grid>

                    </Grid>
                </Grid>
            </div>
        </div>
    )
}