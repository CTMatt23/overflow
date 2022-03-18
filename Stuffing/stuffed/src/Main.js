import React from "react";
import "./Main.scss";
import Map from "./Map";
import MainSub from "./MainSub";
const Main = () => {
  return (
    <div className="flex-main-height">
      <Map></Map>
      <MainSub></MainSub>
    </div>
  );
};
export default Main;
