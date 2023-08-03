import RestComponent from "./RestaurantCard";
import resList from '../Utils/dummyData'
import { useState } from "react";


const BodyComponent = ()=>{

    // Declaring a state variable and assigning a default value resList
    // const [state, setState] = useState(initialState);

    // The set function returned by useState lets you update the state to a different value and trigger a re-render. It acts as a trigger to fire Reconciliation algorithm

   const [listOfRestaurants, setListOfRestaurants] = useState(resList);
   const [searchText, setSearchText] = useState('');

    return (
      <div className="body">
      {/* search Box */}
      <div className="search-container">
        <label htmlFor="search">Search <input id="search" 
        value={searchText}
         onInput={(event)=>{

          setSearchText(event.target.value);
         const filteredList =  listOfRestaurants.filter((res)=>
          res.info.name.toLowerCase().includes(searchText)

          )
          setListOfRestaurants(filteredList);
        }} placeholder='Search for any restaurant and food' type="text" /></label>
      </div>
      <div className="filter-container">
        <button onClick={
            ()=>{
               const filteredList =  listOfRestaurants.filter(
                (item)=> item.info.avgRating > 4.2
                
                )
                setListOfRestaurants(filteredList); // passing updated value of listOfRestaurants to re-render the DOM with updated values
                // As soon as setListOfRestaurants() is called , React starts it's Reconciliation algorithm, find out the
                // difference between Old Virtual DOM and updated Virtual DOM and re-render in the actual DOM.
            }
        } className="filter-btn">Top Rated</button>
      </div>

  
      {/*Restaurant Card Container */}
      <div className="res-container">
          {listOfRestaurants.map((restaurant)=> {
            const {id} = restaurant?.info ;
              return <RestComponent key={id} resData={restaurant}/>
          })}
        
      </div>
    </div>
    )
  }

  export default BodyComponent;