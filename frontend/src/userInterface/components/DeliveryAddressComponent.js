import { Button } from "@mui/material";


import { useSelector } from "react-redux";

export default function DeliveryAddress(props) {
   
    return (<div style={{ height: '100vh', width: '100vw', background: '#f9f9f9' }}>
      
        <div style={{ margin: '5rem',display:'flex' }}>
            <div  style={{width:'60%'}}>
            <div style={{ height: '5rem', background: '#fff', width: '100%', borderRadius: '1rem', display: 'flex' }}>
                <div>
                    <div style={{ fontSize: '24px', fontWeight: 'bolder', margin: '5px' }}>Login</div>
                    <div style={{ margin: '10px' }}> +91 {props.userData[0].mobileno}</div>
                </div>
                <div style={{ marginLeft: 'auto', border: '1px solid grey', height: '2rem', marginTop: '1.5rem', marginRight: '1rem',borderRadius:'0.5rem' }}><Button>Change</Button></div>
            </div>
            <div>

                <div style={{ background: '#fff', height: 'auto', width: '100%', marginTop: '2rem' , borderRadius:'0.5rem' }}>
                    <div style={{ background: '#12daa8', height: '2.5rem', fontSize: '18px', fontWeight: 'bolder', display: 'flex', alignItems: 'center' }}>
                        <div style={{ marginLeft: '20px' }}>Delivery Address</div>
                    </div>
                    <div style={{ marginLeft: '1rem' }}>
                        <div style={{ display: 'flex', marginTop: '1rem', fontSize: '15px', fontWeight: 'bold', margin: '0.5rem 0rem 0.5rem 0rem' }}>
                            <div>{props.userData[0]?.username}</div>
                            <div style={{ marginLeft: '10rem' }}>+91 {props.userData[0]?.mobileno}</div>
                        </div>
                        <div>{props.userData[0]?.address}</div>
                        <div>{props.userData[0]?.pincode}</div>
                    </div>
                </div>
            </div>
        </div>
       
        </div>
    </div>)
}