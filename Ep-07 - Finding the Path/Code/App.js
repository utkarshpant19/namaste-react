import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './Components/Header';
import BodyComponent from './Components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './Components/Error';
import AboutComponent from './Components/About';
import ContactComponent from './Components/Contact';
import RestaurantMenu from './Components/RestaurantMenu';

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

      {/* Children Components of App Layout */}
      <Outlet></Outlet>
     

      {/* // Footer Component */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/', element: <AppLayout />,
    children: [
      { path: '/', element: <BodyComponent /> },
      { path: '/about', element: <AboutComponent /> },
      { path: '/contact', element: <ContactComponent /> },
      { path: '/restaurant/:resId', element: <RestaurantMenu/> },

    ],

    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
