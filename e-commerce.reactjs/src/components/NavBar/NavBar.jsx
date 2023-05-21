import { NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CarWidget"
import { Title } from "../Title/Title"

export const NavBar = (props) => {

  let titulo = "ReactJs-Ecommerce"
  
  return (
    
    <>
      <ul className="contenedorNav">
        <li>
          <NavLink to={"/"}>
            <Title titulo={titulo} />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/categoria/"} className={"navBar"}>Productos</NavLink>
        </li>
        <li>
          <NavLink to={"/categoria/Apple"} className={"navBar"}>Apple</NavLink>
        </li>
        <li>
          <NavLink to={"/categoria/Stanley"} className={"navBar"}>Stanley</NavLink>
        </li>
        <li>
          <NavLink to={"/cart"}>
            <CartWidget />
          </NavLink>
        </li>
      </ul>
      {props.children}
    </>

  )
}
