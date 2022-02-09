import React from "react";
import "./Map.scss";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
);
const Map = () => {
  const defaultProps = {
    center: {
      lat: 42.206242,
      lng: -72.631119,
    },
    zoom: 11,
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDygf49y18G3ICilEz_2uM_9ZW-bCP_B0w" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text={"Kreyser Avrora"}
        />
      </GoogleMapReact>
    </div>
  );
};
export default Map;
