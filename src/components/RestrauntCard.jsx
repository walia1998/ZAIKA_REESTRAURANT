import { IMG_CDN_URL } from "../constants";

const RestraurantCard = ({name, cuisines, cloudinaryImageId,avgRating}) => {
 

    return (
      <div className="card">
        <img
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h3>{avgRating} stars</h3>
        <h4>{cuisines.join(",")}</h4>
      </div>
    );
  };

  export default RestraurantCard;