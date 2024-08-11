import { restrauntList } from "../constants";
import RestraurantCard from "./RestrauntCard";
import { useState, useEffect } from "react";

//What is State?
//What is React Hooks? ==> This is jsut a function 
//What is useState? 

function  filterData(searchText, restraurants) {
   const filterData = restraurants.filter((restraurant) => 
    restraurant.info && restraurant.info.name && restraurant.info.name.includes(searchText)
   );
  return filterData;
}

const Body = () => {
// let searchTxt = "Modak"; // in js we create variables like this but in React we create 

//SearchText is a local state variable
const[restraurants, setRestraurants] = useState(restrauntList)
const [searchText, setSearchText] = useState("");   //==> [variable name , fxn to update the variable]
// to create state variable like this in React 


useEffect(()=>{
  // console.log("call this when dependency is changed ")

  getRestraurant();
}, []); // This is known as a dependicis array 


async function getRestraurant ()  {
  const  data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.0946298&lng=77.2074614&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") ;
  const json = await data.json(); 

  console.log(json);
} 
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search-btn"
        onClick={() => {
          //need to filter the data and 
          const info = filterData(searchText,restraurants);
          //update the state--> restraurant variable.
          setRestraurants(info);
        }}
        >Search</button>
      </div>
      <div className="restaurant-list">
        {restraurants.map((restraurant) => {
          return (
            <RestraurantCard {...restraurant.info} key={restraurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
