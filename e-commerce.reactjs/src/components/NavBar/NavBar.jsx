import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CarWidget"

export const NavBar = (props) => {
  
  return (

    <>
      <ul className="contenedorNav">
        <li>
          <NavLink to={"/"} className={"navBar"}>USAImports</NavLink>
        </li>
        <li>
          <NavLink to={"/categoria/"} className={"navBar"}>Productos</NavLink>
        </li>
        <li>
          <NavLink to={"/categoria/apple"} className={"navBar"}>Apple</NavLink>
        </li>
        <li>
          <NavLink to={"/categoria/stanley"} className={"navBar"}>Stanley</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>
            <CartWidget />
          </NavLink>
        </li>
      </ul>
      {props.children}
    </> 

  )
}
  
/*
Con Boostrap

  <NavBar>
      <Container>
        <Link to={'/'}>
          E-commerce
        </Link>
      </Container>
    </NavBar>
    /*
  <Nav>
  ////
    <Nav.Link href="" ></Nav.Link>
    <Nav.Link></Nav.Link>
  </Nav>
  <Nav>
    <Link>
    </Link> 
  </Nav>
*/
