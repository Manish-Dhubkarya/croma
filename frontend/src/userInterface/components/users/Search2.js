import { TextField,InputAdornment, withTheme } from "@mui/material";
import Search from '@mui/icons-material/Search';

export default function SearchComponent(props)
{
return(<div style={{background:'#ffffff',width:'97%',borderRadius:3,display:'flex',alignItems:'center'}}> 
    <TextField
  hiddenLabel
  id="filled-hidden-label-small"
  variant="filled"
  placeholder="Searching for building Name and Area..."
  size="small"
  fullWidth
  InputProps={{
    disableUnderline:true,
    endAdornment: (
      <InputAdornment position="end" >
        <Search/>
      </InputAdornment>
    ),
  }}
/>
  </div>)
}