import { restrauntList } from "../constants";
import RestraurantCard from "./RestrauntCard";
import { useState, useEffect } from "react";

function filterData(searchText, restraurants) {
  const filterData = restraurants.filter(
    (restraurant) =>
      restraurant.info &&
      restraurant.info.name &&
      restraurant.info.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [restraurants, setRestraurants] = useState(restrauntList);
  const [searchText, setSearchText] = useState(""); //==> [variable name , fxn to update the variable]

  useEffect(() => {
    //API CALL
    getRestraurant();
  }, []);

  async function getRestraurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.1043822&lng=77.17314019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // setRestraurants(json.data.cards)
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
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data and
            const info = filterData(searchText, restraurants);
            //update the state--> restraurant variable.
            setRestraurants(info);
          }}
        >
          Search
        </button>
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
