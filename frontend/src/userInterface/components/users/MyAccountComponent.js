import PersonPinIcon from '@mui/icons-material/PersonPin';
import PostAddIcon from '@mui/icons-material/PostAdd';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import DevicesIcon from '@mui/icons-material/Devices';
import DvrIcon from '@mui/icons-material/Dvr';
import { useNavigate } from 'react-router-dom';
export default function MyAccountComponent()
{ 
    var navigate=useNavigate()
    const handleLogin=()=>{
    navigate('/login')
    }
    return(<div style={{height:'100vh'}}>
        <div style={{marginLeft:'9%',color:'#fff',fontSize:10,marginTop:'2%'}}>
          MyAccount
        </div>
        <div style={{marginLeft:'14%',color:'#fff',fontSize:15,marginTop:'2%'}}>
          <b>My Account</b>
        </div>
        <div style={{display:'flex',flexDirection:'row',marginLeft:'14%',marginTop:'2%'}}>
            <div onClick={handleLogin} style={{border:'1px solid #9A9A9A',cursor:'pointer',color:'#fff',borderRadius:5,display:'flex',alignItems:'center',width:'24%',height:60}}>
            <div style={{marginLeft:'10%'}}>
             <PersonPinIcon fontSize='large'/>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'12%'}}>
             <div style={{fontSize:11}}><b>My Profile</b></div><div style={{fontSize:10}}>Edit your basic details</div>
            </div>
            </div>

            <div style={{border:'1px solid #9A9A9A',marginLeft:'4%',color:'#fff',borderRadius:5,display:'flex',alignItems:'center',width:'24%',height:60}}>
            <div style={{marginLeft:'10%'}}>
             <PostAddIcon fontSize='large'/>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'12%'}}>
             <div style={{fontSize:11}}><b>My Address</b></div><div style={{fontSize:10}}>Manage your saved address</div>
            </div>
            </div>

            <div style={{border:'1px solid #9A9A9A',marginLeft:'4%',color:'#fff',borderRadius:5,display:'flex',alignItems:'center',width:'24%',height:60}}>
            <div style={{marginLeft:'10%'}}>
             <FavoriteBorderIcon fontSize='large'/>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'12%'}}>
             <div style={{fontSize:11}}><b>My Wislist</b></div><div style={{fontSize:10}}>Have a look at your Favorite products</div>
            </div>
            </div>
        </div>
        <div style={{display:'flex',flexDirection:'row',marginLeft:'14%',marginTop:'2%'}}>
            <div style={{border:'1px solid #9A9A9A',color:'#fff',borderRadius:5,display:'flex',alignItems:'center',width:'24%',height:60}}>
            <div style={{marginLeft:'10%'}}>
             <EmojiEventsIcon fontSize='large'/>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'12%'}}>
             <div style={{fontSize:11}}><b>My Order</b></div><div style={{fontSize:10}}>views track,cancel order and buy again</div>
            </div>
            </div>

            <div style={{border:'1px solid #9A9A9A',marginLeft:'4%',color:'#fff',borderRadius:5,display:'flex',alignItems:'center',width:'24%',height:60}}>
            <div style={{marginLeft:'10%'}}>
             <MarkUnreadChatAltIcon fontSize='large'/>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'12%'}}>
             <div style={{fontSize:11}}><b>My Service Request</b></div><div style={{fontSize:10}}>Manage complaint feedback</div>
            </div>
            </div>

            <div style={{border:'1px solid #9A9A9A',marginLeft:'4%',color:'#fff',borderRadius:5,display:'flex',alignItems:'center',width:'24%',height:60}}>
            <div style={{marginLeft:'10%'}}>
             <DevicesIcon fontSize='large'/>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'12%'}}>
             <div style={{fontSize:11}}><b>My Device & Plan</b></div><div style={{fontSize:10}}>Manage at your Favorite products</div>
            </div>
            </div>
        </div>
        <div style={{display:'flex',flexDirection:'row',marginLeft:'14%',marginTop:'2%'}}>
            <div style={{border:'1px solid #9A9A9A',color:'#fff',borderRadius:5,display:'flex',alignItems:'center',width:'24%',height:60}}>
            <div style={{marginLeft:'10%'}}>
             <DvrIcon fontSize='large'/>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'12%'}}>
             <div style={{fontSize:11}}><b>My Rewards</b></div><div style={{fontSize:10}}>Exclusive offer and loyalty</div>
            </div>
            </div>

          
        </div>
    </div>)
}