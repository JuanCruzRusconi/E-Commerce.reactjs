import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CarWidget"

export const NavBar = (props) => {
  
  return (
     
    <>
      <ul className="nav">
        <li className="h3">
          <NavLink to={"/categoria/apple"}>Productos</NavLink>
        </li>
        <li className="h3">
          <NavLink to={"/categoria/stanley"}>Stanley</NavLink>
        </li>
        <li className="h3">
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
