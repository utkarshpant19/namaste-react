
import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./restaurants";

/*

Header
 - Logo
 - Nav Items

Body
 - Search Item
 - RestaurentContainer
  - RestaurentCard

Footer
 - Copyright
 - Links
 - Contact

*/
const styleBackground = {
    backgroundColor: 'lightgray'
}

const ResComponent = (props) => {
    const { resData } = props;
    console.log(resData);

    const { name, avgRating, cuisines, costForTwo, areaName } = resData.info;

    console.log('Props ', props);
    return (
        // <div className="res-card" style={styleBackground}>
        //     <h3>Meghna Foods</h3>
        // </div>
        <div className="res-card">
            <img className="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info?.cloudinaryImageId}></img>
            <h3>{name}</h3>
            <div>{avgRating} ⭐</div>
            <div>{cuisines.join(', ')}</div>
            <div>{costForTwo}</div>
            <div>{resData.info?.sla?.deliveryTime} mins</div>
            <div>{areaName}</div>
        </div>
    )
}

const AppLayout = () => {

    return (

        <div className="app">
            {/* Header Component */}
            <HeaderComponent />

            {/* // Body Component */}
            <div className="body">
                <div className="searchContainer">
                    Search
                </div>
                
                <div className="res-container">
                    {resList.map((restaurant) => {
                    {/* Always add key when rendering list of items to uniquely identify each item.
                    This helps React to uniquely identify if a new item is added in the array.
                    It will only render that element in the DOM not the entire list of items.

                    On the other hand, if we don't provide a key and if an item is added or removed from DOM
                    It will re-render all the items in the array on the DOM (Not just that item)
                
                */}
                        return <ResComponent key={restaurant.info.id} resData={restaurant} />
                    })
                    }
                </div>
            </div>

            {/* // Footer Component */}
        </div>


    );
}

const HeaderComponent = () => {

    return (
        <header className="header">
            <div className="logoContainer">
                <img alt="Company Logo" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-delivery-logo-design-template-a342a3b7515a10c800c6885bce8b3ae9_screen.jpg?ts=1619678752"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </div>
        </header>
    )
}












const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)