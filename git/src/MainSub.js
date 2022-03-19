import React from "react";
import "./MainSub.scss";
import { useSelector, shallowEqual } from "react-redux";
import NavigationIcon from "@mui/icons-material/NavigationOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
const MainSub = () => {
  const restaurantList = useSelector((state) => {
    console.log(state.restaurantSlice);
    return state.restaurantSlice;
  }, shallowEqual);
  const styles = {
    smallIcon: {
      width: 5,
      height: 5,
    },
  };
  return (
    <div className="main">
      {restaurantList.data.data.map((res) => (
        <div className="card" key={res._id}>
          <div className={res.isActive ? "card-title active" : "card-title"}>
            <h3>{res.name}</h3>
            <h4>
              {res.city},{res.state}
            </h4>
          </div>
          <img
            className="restaurant-image"
            src={"http://127.0.0.1:8887/" + res.images[0].trim()}
            alt=""
          />
          <div>
            <div>{res.categories.map((res) => res)}</div>
            <div className="card-footer">
              <div>
                <LocalPhoneOutlinedIcon
                  style={{ fontSize: 14 }}
                  className="nav-icon"
                ></LocalPhoneOutlinedIcon>
                <p>{res.phone}</p>
              </div>
              <div>
                <NavigationIcon
                  style={{ fontSize: 14 }}
                  className="nav-icon"
                ></NavigationIcon>
                <p>{res.miles.toFixed(1)}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MainSub;
