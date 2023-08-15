import { useState } from "react";
import { LOGO_IMAGE_URL } from "../Utils/constants";
import { Link } from "react-router-dom";

const HeaderComponent = () => {

  const [btnName, setBtnName] = useState('Login');
  console.log('Header Rendered');
    return (
      <header className="header">
        <div className="logo-container">
          <img
            alt="Company Logo"
            src={LOGO_IMAGE_URL}
          />
  
        </div>
        <ul className="nav-items">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <button onClick={()=> {

btnName == 'Login' ? setBtnName('Logout') : setBtnName('Login');

          }}>{btnName}</button>
        </ul>
      </header>
    );
  };

  export default HeaderComponent;