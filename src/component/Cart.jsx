import Cartsvg from "../assets/icon/Cart";
function Cart({onClick}){
    return(
        <div onClick={onClick}>
        <Cartsvg/>
        </div>
    )
}
export default Cart;