import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './Components/Header';
import BodyComponent from './Components/Body';

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

const AppLayout = () => {
  return (
    <div className="app">
      {/* // Header Component */}
      <HeaderComponent />

      {/* Body Component */}
     <BodyComponent/>

      {/* // Footer Component */}
    </div>
  );
};

const root = ReactDOM.createRoot (document.getElementById ('root'));
root.render (<AppLayout />);
