import CheckOutHeader from "../CheckOutHeader";
import ContactInformationComponents from "../ContactInformationComponents";
import Header from "../Header";
import ProsidToPayment from "../ProsidToPayment";

export default function CheckOutScreen() {
    return (<div style={{ width: '100%', background: '#f9f9f9', height: 'auto' }}>
        <div style={{position:'sticky',top:0, zIndex:3}}>
            <CheckOutHeader />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center',  width: '100%',position:'sticky' }}>
            <div style={{ display: 'flex', width: '60%' }}>
                <ContactInformationComponents />
            </div>
            <div style={{ width: '20%',marginTop:'6%',marginLeft:'2%',position:'sticky',top:'20%' }}>
                <ProsidToPayment/>
            </div>
        </div>

    </div>)
}