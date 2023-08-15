import { RES_IMAGE_URL } from "../Utils/constants";

const RestComponent = (props) => {
//   console.log(props);
  const { resData } = props;

  const { name, avgRating, cuisines, areaName, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="res-card">
      <img
        src={RES_IMAGE_URL + cloudinaryImageId}
        alt="Restaurant Logo"
        className="res-logo"
      />
      <div className="res-details">
        <h3>{name}</h3>
        <div>{avgRating}⭐</div>
        <div>{cuisines.join(", ")}</div>
        <div>{areaName}</div>
      </div>
    </div>
  );
};

export default RestComponent;
