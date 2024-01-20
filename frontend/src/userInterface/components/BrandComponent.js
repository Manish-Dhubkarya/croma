import { Accordion, AccordionDetails, AccordionSummary, Typography,FormGroup,FormControlLabel,Checkbox, Divider } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

function BrandComponent() {
  const [open,setOpen]=useState(true)

  const handleOpen=()=>{
    if(open)
    {
      setOpen(false)
    }
    else
    {
      setOpen(true)
    }
  }
  return (
    <div style={{ width: '80%', marginTop: '10px' }}>
      <Accordion expanded={open} style={{ background: '#191919', color: '#fff',marginTop:'10px' }}>
        <AccordionSummary
           style={{padding:0}}
          expandIcon={<ExpandMoreIcon onClick={handleOpen} style={{ color: '#fff' }} />}
        >
          <Typography style={{fontSize:'12px'}}>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails style={{padding:0}}>
          <FormGroup style={{padding:0}}>
            <FormControlLabel control={<Checkbox  sx={{paddingTop:0,paddingBottom:0.2,color: "#9A9A9A",'&.Mui-checked': {color: "#12daa8"}}} />} label={<Typography style={{fontSize:'12px'}}>Blue Star </Typography>} />
            <FormControlLabel control={<Checkbox  sx={{paddingTop:0.1,paddingBottom:0.2,color: "#9A9A9A",'&.Mui-checked': {color: "#12daa8"}}} />} label={<Typography style={{fontSize:'12px'}}>O General </Typography>} />
            <FormControlLabel control={<Checkbox  sx={{paddingTop:0.1,paddingBottom:0.2,color: "#9A9A9A",'&.Mui-checked': {color: "#12daa8"}}} />} label={<Typography style={{fontSize:'12px'}}>Daikin</Typography>} />
            <FormControlLabel control={<Checkbox  sx={{paddingTop:0.1,paddingBottom:0.2,color: "#9A9A9A",'&.Mui-checked': {color: "#12daa8"}}} />} label={<Typography style={{fontSize:'12px'}}>Haier</Typography>} />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default BrandComponent