import React from 'react';

import { BackgroundImagesLocations, BackgroundImagesAll } from "../types";
import Dot from "./Dot";

import "./Dots.scss";

const Dots = ({backgroundImages, setBackgroundImages}: DotsProps) => {
    const validLocations = ["nyc", "stockholm", "strasbourg", "geneva", "ottawa", "hamilton", "sf"];

    return (
        <div className="dots">
            {Object.keys(backgroundImages).map(image =>
                (validLocations.includes(image) && ( 
                    <div key={image} >
                        <Dot 
                            name={image} 
                            backgroundImages={backgroundImages} 
                            setBackgroundImages={setBackgroundImages} 
                        />
                    </div>)
                )
            )}
        </div>
    );
};

export type DotsProps = {
    backgroundImages: BackgroundImagesLocations;
    setBackgroundImages: React.Dispatch<React.SetStateAction<BackgroundImagesAll>>;
};

export default Dots;