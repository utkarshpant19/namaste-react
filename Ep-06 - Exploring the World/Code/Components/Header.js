import { useState } from "react";
import { LOGO_IMAGE_URL } from "../Utils/constants";

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
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Cart</a></li>
          <button onClick={()=> {

btnName == 'Login' ? setBtnName('Logout') : setBtnName('Login');

          }}>{btnName}</button>
        </ul>
      </header>
    );
  };

  export default HeaderComponent;