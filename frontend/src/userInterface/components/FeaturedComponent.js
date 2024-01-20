import { FormControl, MenuItem, Select } from "@mui/material"
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles({
    select: {
        '&:before': {
            borderColor: 'white',
        },
        '&:after': {
            borderColor: 'white',
        },
        '&:not(.Mui-disabled):hover::before': {
            borderColor: 'white',
        },
    },
    icon: {
        fill: 'white',
    },
    root: {
        color: 'yellow',
    },
})

function FeaturedComponent() {
    const classes = useStyles()
    const [featured,setFeatured]=useState('')
    return (
        <div style={{ width: '80%' }}>
            <div style={{ color: '#fff', fontWeight: 600, width: '100%',fontSize:'14px' }}>SORT BY</div>
            <FormControl fullWidth size="small" style={{ marginTop: '10px' }} className={classes.formControl}>
                <Select
                    sx={{
                        color: "white",
                        borderRadius: '10px',
                        '.MuiOutlinedInput-notchedOutline': {
                            border: "0.5px solid #9A9A9A",
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            border: "0.5px solid #9A9A9A",
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            border: "0.5px solid #fff",
                        },
                        fontSize:'14px'
                    }}
                    inputProps={{
                        MenuProps: {
                            sx: {
                                "& .MuiMenu-paper": {
                                    backgroundColor: "#191919",
                                    color:'#fff',
                                },
                                "&& .Mui-selected": {
                                    color: "#12daa8"
                                },
                                "& .MuiMenuItem-root:hover": {
                                    backgroundColor: "white",
                                    color:'black'
                                },
                                '& .MuiMenuItem-root': {
                                    fontSize: '14px',
                                },
                            }
                        }
                    }}
                    defaultValue={"Featured"}
                    onChange={(event)=>setFeatured(event.target.value)}
                    IconComponent={(props) => (<ExpandMoreOutlinedIcon style={{ color: '#fff' }} {...props} />)}
                >
                    <MenuItem selected value="Featured">Featured</MenuItem>
                    <MenuItem value="discount">Discount</MenuItem>
                    <MenuItem value="latest arrival">Latest Arrival</MenuItem>
                    <MenuItem value="top rated">Top Rated</MenuItem>
                    <MenuItem value="price lowest">Price (Lowest First)</MenuItem>
                    <MenuItem value="price highest">Price (Highest First)</MenuItem>
                </Select>
            </FormControl>
        </div >
    )
}

export default FeaturedComponent