import Card from "./Card";
// import data from "../../data/feeds.json"
import hamburger from "../../assets/burger.jpeg"
import coke from "../../assets/coke.jpeg"
import fries from "../../assets/fries.jpeg"
import pepsi from "../../assets/pepsi.jpeg"

function Screen2(){ 
    const items = [
        {img:hamburger, name:"Hamburger" ,price:"200"},
        {img:coke, name:"Coke" ,price:"100"},
        {img:fries, name:"Fries" ,price:"50"},
        {img:pepsi, name:"Pepsi" ,price:"50"},
    ]
    return(
        <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
<div style={{display:'flex',flexWrap:'wrap',gap:'1rem',marginTop:'2rem',width:'70%'}}>
{items.map((val,i)=>(
<Card img={val.img} price={val.price} val={val.name} key={i}/>
))}
        </div>
</div>
    )
}

export default Screen2;