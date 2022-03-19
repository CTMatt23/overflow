import React from "react";
import "./Map.scss";
import GoogleMapReact from "google-map-react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { setActive } from "./store/restaurant/restaurantSlice";

const Map = () => {
  const dispatch = useDispatch();
  function handleMarkerClick(data) {
    console.log("click :" + data.name);
    dispatch(setActive({ res: data._id.toString() }));
  }
  const AnyReactComponent = ({ data }) => (
    <div
      onClick={() => handleMarkerClick(data)}
      style={{
        background: "blue",
        padding: "5px 5px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
      }}
    ></div>
  );

  const restaurantList = useSelector((state) => {
    console.log(state.restaurantSlice);
    return state.restaurantSlice;
  }, shallowEqual);

  const defaultProps = {
    center: {
      lat: 42.206242,
      lng: -72.631119,
    },
    zoom: 11,
  };
  return (
    // Important! Always set the container height explicitly
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDygf49y18G3ICilEz_2uM_9ZW-bCP_B0w" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {restaurantList.data.data.map((res) => (
          <AnyReactComponent
            data={res}
            key={res._id}
            lat={res.lat ? res.lat : defaultProps.center.lat}
            lng={res.long ? res.long : defaultProps.center.lng}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};
export default Map;
