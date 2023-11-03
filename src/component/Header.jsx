import { useNavigate } from "react-router-dom";
import { Spoon } from "../assets/icon/Spoon";
import Cart from "./Cart";
import Alert from "./Alert";
import CartModal from "./CartModal";
import { useState } from "react";
function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    return(
        <div style={{background:'blue'}}>
        <div style={{
            display:'flex',
            margin:'0rem 1rem',
            justifyContent:'space-between'
        }}>
            <div style={{display:'flex',gap:'1rem',alignItems:'center'}}>
                <Spoon/>
<h4 onClick={()=>navigate("/")} style={{color:'#FFF',cursor:'pointer'}}>Food's Restaurant</h4>
            </div>
            <div style={{display:'flex',marginRight:'1rem',alignItems:'center'}}>
            <CartModal icon={<Cart/>} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </div>
        </div>
    )
}

export default Header;