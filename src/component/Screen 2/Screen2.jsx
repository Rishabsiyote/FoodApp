import Card from "./Card";
// import data from "../../data/feeds.json"
import hamburger from "../../assets/burger.jpeg"
import coke from "../../assets/coke.jpeg"
import fries from "../../assets/fries.jpeg"
import pepsi from "../../assets/pepsi.jpeg"
function Screen2(){ 
    const counter = new Set();
    
    const cartItems = {
        hamburger : 0,
        pepsi : 0,
        coke : 0,
        fries : 0
    }
    const items = [
        {img:hamburger, name:"Hamburger" ,price:"200"},
        {img:coke, name:"Coke" ,price:"100"},
        {img:fries, name:"Fries" ,price:"50"},
        {img:pepsi, name:"Pepsi" ,price:"50"},
    ]
    function handlecart(val){
        if(val==="Hamburger"){cartItems.hamburger = cartItems.hamburger+1;
            if(!counter.has(1)){
                counter.add(1);
            }
        }
        if(val==="Coke"){
            cartItems.coke = cartItems.coke+1;
            if(!counter.has(2))counter.add(2);}
        if(val==="Pepsi"){
            cartItems.pepsi = cartItems.pepsi+1;
            if(!counter.has(3))counter.add(3);}
        if(val==="Fries"){
            cartItems.fries = cartItems.fries+1;
            if(!counter.has(4))counter.add(4);}
            console.log(counter.size)
    }
    return(
        <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
<div style={{display:'flex',flexWrap:'wrap',gap:'1rem',marginTop:'2rem',width:'70%'}}>
{items.map((val,i)=>(
<Card img={val.img} price={val.price} val={val.name} key={i} cart={handlecart}/>
))}
        </div>
</div>
    )
}

export default Screen2;