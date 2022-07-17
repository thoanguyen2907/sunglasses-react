import React, { useState } from "react";
import dataGlasses from "../Data/dataGlasses.json";

export default function Sunglasses() {
  const [currentGlass, setCurrentGlass] = useState({
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  });

  const styleGlasses = {
    width: "150px",
    top: "75px",
    right: "117px",
    opacity: "0.7",
    transform: "rotate(0deg)",
  };

  const infoGlasses = {
    width: "250px",
    top: "200px",
    left: "318px",
    paddingLeft: "15px",
    backgroundColor: "rgba(255,127,0,.5)",
    textAlign: "left",
    height: "105px",
  };

  const changeCurrentGlass = (newGlass) => {
    setCurrentGlass(newGlass);
  };

  const renderGlass = (arrayGlass) => {
    return arrayGlass.map((item, index) => {
      return <img 
      key={index}
      src={item.url} 
      alt={item.name}
      style={{width: "110px", cursor: "pointer"}}
      className="ml-2 p-2 border border-width-1" 
      onClick = {() =>changeCurrentGlass(item)} />;
    });
  };

  return (
    <div
      style={{
        backgroundImage: "url(./glassesImage/background.jpg)",
        backgroundSize: "2000px",
        minHeight: "2000px",
      }}
    >
      <div style={{ backgroundColor: "rgba(0,0,0,.8)", minHeight: "2000px" }}>
        <h3
          style={{ backgroundColor: "rgba(0, 0 ,0,.3)" }}
          className="text-center text-light p-5"
        >
          TRY GLASSES APP ONLINE
        </h3>
        <div className="container">
          <div className="row mt-5 text-center">
            <div className="col-6">
              <div className="position-relative">
                <img
                  className="position-absolute"
                  style={{ width: "250px" }}
                  src="./glassesImage/model.jpg"
                  alt="model.jpg"
                />
                <img
                  style={styleGlasses}
                  className="position-absolute glassesStyle"
                  src={currentGlass.url}
                  alt = {currentGlass.name}
                />

                <div style={infoGlasses} className="position-relative ">
                  <span
                    style={{ color: "#AB82FF", fontSize: "17px" }}
                    className="font-weight-bold"
                  >
                    {" "}
                    {currentGlass.name}
                  </span>{" "}
                  <br />
                  <span
                    style={{
                      fontSize: "14px",
                      paddingRight: "5px",
                      fontWeight: "400",
                    }}
                  >
                    {currentGlass.desc}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img
                style={{ width: "250px" }}
                src="./glassesImage/model.jpg"
                alt="model.jpg"
              />
            </div>
          </div>
        </div>
        {/* Div chứa các kính được chọn */}
        <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
            {renderGlass(dataGlasses)}
        </div>
      </div>
    </div>
  );
}
