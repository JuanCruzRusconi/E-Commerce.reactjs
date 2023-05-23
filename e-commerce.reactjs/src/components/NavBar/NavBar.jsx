import { NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CarWidget"
import { Title } from "../Title/Title"
import { Form } from "../Form/Form"

export const NavBar = (props) => {

  let name = "ReactJs-Ecommerce"
  
  return (
    
    <>
      <ul className="contenedorNav">
        <li>
          <NavLink to={"/"}>
            <Title name={name} />
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
          <NavLink to={"/form"} className={"navBar"}>Formulario</NavLink>
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
