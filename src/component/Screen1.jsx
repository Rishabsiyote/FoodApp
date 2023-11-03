import { useNavigate } from "react-router-dom";

function Screen1(){
    const navigate = useNavigate();
    return(
        <div style={{
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center'
        }}>
            <div style={{fontSize:'46px',marginTop:'2rem',maxWidth:'400px',textAlign:'center'}}>Welcome to Food's Kitchen</div>
            <button onClick={()=>navigate("/menu")} style={{background:'blue',padding:'0.5rem 1rem',borderRadius:'0.4rem',color:'#FFF',border:'none',fontWeight:'600',textTransform:'uppercase',cursor:'pointer',marginTop:'2rem'}}>go to menu</button>
        </div>
    )
}
export default Screen1;