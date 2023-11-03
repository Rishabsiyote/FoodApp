import { Outlet } from "react-router-dom"
import Header from "./component/Header"

function Layout(){
    let count= 0;
    return(
        <>
        {count>0?<div style={{marginLeft:'1rem',right:'25px',top:'10px',padding:'0.1rem 0.2rem',display:'flex',justifyContent:'center',borderRadius:'1rem',position:'absolute',background:'#808080',color:'#FFF',zIndex:'1',border:'1px solid #FFF',fontSize:'12px'}}>{count}</div>:""}
        <Header/>
        <Outlet/>
        </>
    )
}
export default Layout