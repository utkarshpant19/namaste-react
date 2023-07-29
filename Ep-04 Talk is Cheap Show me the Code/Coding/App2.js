import React from 'react';
import ReactDOM from 'react-dom/client';
import { resList } from './restaurants';

// Header Component
// - App Logo
// - Nav Items
//     - Home
//     - About
//     - Contact
//     - Add to Cart

// Body Component
// - Search Food/Restaurants
// - Restaurant Container
//     - Restaurant Card
//         - Name of the Restaurant
//         - Star Rating
//         - Cuisine
//         - ETA
//         - Area

// Footer Component

// -

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          alt="Company Logo"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-delivery-logo-design-template-a342a3b7515a10c800c6885bce8b3ae9_screen.jpg?ts=1619678752"
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

const RestComponet = (props) => {

    console.log(props);
    let {resData} = props;

    let {name, avgRating, cuisines, areaName} = resData?.info;

  return (
    <div className="res-card">
      <img
        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData?.info?.cloudinaryImageId}
        alt="Restaurant Logo"
        className="res-logo"
      />
      <div className="res-details">
        <h3>{name}</h3>
        <div>{avgRating}⭐</div>
        <div>{cuisines.join(', ')}</div>
        <div>{areaName}</div>
      </div>

    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      {/* // Header Component */}
      <HeaderComponent />

      {/* Body Component */}
      <div className="body">
        {/* search Box */}
        <div className="search-container">
          <label htmlFor="search">Search <input id="search" placeholder='Search for any restaurant and food' type="text" /></label>
        </div>

        {/*Restaurant Card Container */}
        <div className="res-container">
            {resList.map((restaurant)=> {
                return <RestComponet key={restaurant?.info?.id} resData={restaurant}/>
            })}
          
        </div>
      </div>

      {/* // Footer Component */}
    </div>
  );
};

const root = ReactDOM.createRoot (document.getElementById ('root'));
root.render (<AppLayout />);
