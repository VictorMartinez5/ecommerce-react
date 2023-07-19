
import { Link } from "react-router-dom";

import ImgLogo from "../../assets/img/logo.svg";
import { Navbar } from 'flowbite-react';
import Cart from "./Cart";

export default function NavBar() {
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand>
        <img
          alt="Seven"
          className="mr-3 h-12 sm:h-16 scale-150 translate-x-3 "
          src={ImgLogo}
        />
      </Navbar.Brand>
      <div className="flex md:order-2 gap-3">
        <Cart/>
        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse >
        <Navbar.Link>
          <Link to="/">
          Home
          </Link>
        </Navbar.Link>
        <Navbar.Link>
        <Link to="/about">
        About
          </Link>
        </Navbar.Link>
        <Navbar.Link>
        <Link to="/products/remera">
          Remeras
          </Link>
        </Navbar.Link>
        <Navbar.Link>
        <Link to="/products/hoddie">
          Hoddies
          </Link>
        </Navbar.Link>
        <Navbar.Link>
        <Link to="/products/campera">
          Camperas
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


