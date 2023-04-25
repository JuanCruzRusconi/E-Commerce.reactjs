
import { Link } from "react-router-dom"
import { CartWidget } from "../CartWidget/CarWidget"

export const NavBar = (props) => {
  return (
    
    
    <>
      <ul className="nav">
        <li>
          <h3>Productos</h3>
        </li>
        <li>
          <h3>Contacto</h3>
        </li>
        <li>
          <h3>Nosotros</h3>
        </li>
        <CartWidget />
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
