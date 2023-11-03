import { useState } from "react";

function Card({img,val,price,cart}){
    const [amout , setAmout] = useState(0); 
    function handleAmount(){
     setAmout(amout+1);
     cart(val);
    }
    return(
<div style={{width:'200px',borderRadius:'5px',boxShadow:'2px 2px 2px 2px rgba(0, 0, 0, 0.2)',paddingBottom:'0.5rem'}}>
    <div style={{height:'130px',overflow:'hidden'}}>
    <img src={img} alt="" style={{width:'100%'}}/>
    </div>
    <div style={{marginLeft:'0.5rem',marginTop:'0.3rem'}}>
    <div style={{fontSize:'20px'}}>{val}</div>
    <div style={{margin:'0.5rem 0rem'}}>Price: {price}</div>
    {amout>0? <div>Total: {amout}</div>:""}
    {amout>0? <div style={{margin:'0.5rem 0rem'}}>Cost(INR): {price*amout}</div>:""}
    <div style={{display:'flex',gap:'0.5rem'}}>
        <button onClick={handleAmount} style={{background:'blue',padding:'0.5rem 1rem',borderRadius:'0.4rem',color:'#FFF',border:'none',fontWeight:'600',textTransform:'uppercase',cursor:'pointer'}}>+</button>
        <button onClick={()=>{if(amout>0)setAmout(amout-1)}}style={{background:amout>0?'#e4007c':'#f0f8ff ',padding:'0.5rem 1rem',borderRadius:'0.4rem',color:'#000',border:'none',fontWeight:'600',textTransform:'uppercase',cursor:'pointer'}}>-</button>
    </div>
    </div>
</div>
    )
}
export default Card;