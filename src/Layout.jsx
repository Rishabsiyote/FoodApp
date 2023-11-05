import { Outlet } from "react-router-dom"
import Header from "./component/Header"
import { StateProvider, useStateContext } from "./component/StateContext"
import { useContext } from "react"
import ValueContext from "./component/ValueContext"

function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
}
export default Layout