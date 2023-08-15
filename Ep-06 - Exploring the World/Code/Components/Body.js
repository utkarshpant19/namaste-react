import RestComponent from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  // Declaring a state variable and assigning a default value resList
  // const [state, setState] = useState(initialState);

  // The set function returned by useState lets you update the state to a different value and trigger a re-render. It acts as a trigger to fire Reconciliation algorithm

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  // Whenever state varible updates, React triggers Reconciliation cycle (Re-renders the component)
  console.log('Body Rendered');

  useEffect(() => {
    console.log('Use Effect called');
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const listOfRestaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log("Swiggy API Response ", json);
    setListOfRestaurants(listOfRestaurants);
    setFilteredRestaurants(listOfRestaurants);
  };

  const searchFilter = (e) => {

    console.log(e.target.value);
    setSearchText(e.target.value);

    const filteredRes = listOfRestaurants.filter(
      (restaurant) => restaurant.info?.name.toLowerCase().includes(searchText.trim().toLowerCase())
    )
    setFilteredRestaurants(filteredRes);
  }


  // Conditional Rendering

  return listOfRestaurants?.length === 0 ? <Shimmer /> : (
    <div className="body">
      {/* search Box */}

      <div className="filter">
        <div className="search-container">
          <input type="text" value={searchText} onChange={searchFilter} />
        </div>
        <div className="filter-container">
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (item) => item.info.avgRating > 4.2
              );
              setFilteredRestaurants(filteredList); // passing updated value of listOfRestaurants to re-render the DOM with updated values
              // As soon as setListOfRestaurants() is called , React starts it's Reconciliation algorithm, find out the
              // difference between Old Virtual DOM and updated Virtual DOM and re-render in the actual DOM.
            }}
            className="filter-btn"
          >
            Top Rated
          </button>
        </div>
      </div>


      {/*Restaurant Card Container */}

      <div className="res-container">
        {
          filteredRestaurants.map((restaurant) => {
            const { id } = restaurant?.info
            return <RestComponent key={id} resData={restaurant} />
          })
        }
      </div>
    </div>
  );
};

export default BodyComponent;
