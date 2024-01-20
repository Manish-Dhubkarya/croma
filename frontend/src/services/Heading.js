import list from "../Assets/list.ico"
import { useNavigate } from "react-router-dom"
export default function Heading(props){
    var navigate=useNavigate()
    return(
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"100%"}}>
            <div>
                <img src={props.image} width={80}/>
                <div style={{fontFamily: 'Kalam', fontWeight:"bold"}}>
                {props.caption}
            </div>
            </div>
            <div style={{marginLeft:"auto"}}>
                <img onClick={()=>navigate(props.link)} style={{cursor:"pointer", width:80}} src={list}/>
            </div>
        </div>
    )
}