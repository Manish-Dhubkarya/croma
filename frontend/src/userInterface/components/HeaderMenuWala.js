import { AppBar, Box, Toolbar } from "@mui/material";
import Logo from "../../../assets/croma.gif";
import SearchComponent from "./SearchComponent";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useState, useEffect } from "react";
import { getData } from "../../../services/FetchNodeServices";
export default function Header(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [categories, setCategories] = useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const fetchCategories = async () => {
    var result = await getData("userinterface/display_all_category");
    setCategories(result.data);
  };

  useEffect(function () {
    fetchCategories();
  }, []);

  const showMenuItems = () => {
    return categories.map((item) => {
      return <MenuItem onClick={handleClose}>{item.categoryname}</MenuItem>;
    });
  };

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
                marginLeft: matches ? 100 : 0,
                display: "flex",
                width: 100,
                justifyContent: "space-between",
              }}
            >
              <AccountCircle style={{ fontSize: 30 }} />
              <ShoppingCart style={{ fontSize: 30 }} />
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
            <MenuIcon
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{ color: "#fff" }}
            />

            <Menu
              className="example"
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
              
            >
              {showMenuItems()}
            </Menu>

            <SearchComponent />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

