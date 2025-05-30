import { CDN_LINK } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla } = resData.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_LINK + resData.info.cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
