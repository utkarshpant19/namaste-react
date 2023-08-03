import { LOGO_IMAGE_URL } from "../Utils/constants";

const HeaderComponent = () => {
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
        </ul>
      </header>
    );
  };

  export default HeaderComponent;