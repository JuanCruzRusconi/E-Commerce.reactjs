import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CarWidget"
import { Title } from "../Title/Title"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

const categorias = [
  {id: 1, categoria: "apple", name: "Apple"},
  {id: 2, categoria: "stanley", name: "Stanley"}
]

export const NavBar = (props) => {

  let brand = "ReactJs-Ecommerce"
  
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

      <Container>

        <Navbar.Brand>
          <Link to={'/'}>
            <Title brand={brand} />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">

          </Nav>

          <Nav className="categorias">

            {categorias.map (categoria => <NavLink key={categoria.id} to={`/categoria/${categoria.categoria}`} className={"categorias"} />)}

            <Nav.Link eventKey={2} href="#memes">
              <CartWidget />
            </Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
    
  )
}

/*


<>
      <ul className="contenedorNav">
        <li className="brand">
          <NavLink to={"/"}>
            <Title brand={brand} />
          </NavLink>
        </li>
        <div className="categorias">
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
            <NavLink to={"/form"} className={"navBar"}>Contacto</NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}>
              <CartWidget />
            </NavLink>
          </li>
        </div>
      </ul>
      {props.children}
    </>

    */