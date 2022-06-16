import React, { useState } from 'react'
import dataGlasses from '../Data/dataGlasses.json';

export default function Sunglasses() {
    const [currentGlasses, setCurrenGlasses] = useState({
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./glassesImage/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "

    })
  
    const styleGlasses = {
        width: '150px',
        top: '75px',
        right: '80px',
        opacity: '0.7',
        transform: 'rotate(0deg)'
    }

    const infoGlasses = {
        width: '250px',
        top: '200px',
        left: '318px',
        paddingLeft: '15px',
        backgroundColor: 'rgba(255,127,0,.5)',
        textAlign: 'left',
        height: '105px'
    }
    const changeCurrentGlasses = (newglasses) => {
        setCurrenGlasses(newglasses)
    }
    const renderGlasses = (dataGlasses) => {
        return dataGlasses.map((glasses, index) => {
          return (
            <img alt = "changeglasses"
            onClick={() => {
                changeCurrentGlasses(glasses)

            }
            }
              key={index}
              src={glasses.url}
              className="ml-2 p-2 border border-width-1"
              style={{width: "110px", cursor: "pointer"}}
            />
          );
        });
      };
    
   

    return (
        <div style={{ backgroundImage: 'url(./glassesImage/background.jpg)', backgroundSize: '2000px', minHeight: '2000px' }}>
            <div style={{ backgroundColor: 'rgba(0,0,0,.8)', minHeight: '2000px' }}>
                <h3 style={{ backgroundColor: 'rgba(0, 0 ,0,.3)' }} className="text-center text-light p-5">TRY GLASSES APP ONLINE</h3>
                <div className="container">
                    <div className="row mt-5 text-center">
                        <div className="col-6">
                            <div className="position-relative">
                                <img className="position-absolute" style={{ width: '250px' }} src="./glassesImage/model.jpg" alt='model.jpg' />
                                <img style={styleGlasses} className="position-absolute glassesStyle" src={currentGlasses.url} />

                                <div style={infoGlasses} className="position-relative ">

                                    <span style={{ color: '#AB82FF', fontSize: '17px' }} className="font-weight-bold"> {currentGlasses.name}</span> <br />
                                    <span style={{ fontSize: '14px', paddingRight: '5px', fontWeight: '400' }}>
                                    Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. 
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <img style={{ width: '250px' }} src="./glassesImage/model.jpg" alt='model.jpg' />

                        </div>
                    </div>
                </div>
                {/* Div chứa các kính được chọn */}
                <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
                {renderGlasses(dataGlasses)}
            
                </div>
            </div>
        </div>
    )
}
