import React from 'react';

import logo from 'Images/logo_hole.png';
import BackgroundImages from "./BackgroundImages";
import Dots from "./Dots";
import { BackgroundImagesAll } from './types';

import './Home.scss';

const Home = () => {
  const [backgroundImages, setBackgroundImages] = React.useState<BackgroundImagesAll>(backgroundImagesDefaults);
  
  return (
    <div className="home">
      <div className="logo" >
        <img className="logo-main" src={logo} alt={"Ooops :("} />
        <BackgroundImages {...backgroundImages} />
        <Dots setBackgroundImages={setBackgroundImages} backgroundImages={backgroundImages} />
      </div>
    </div>
  );
};

const backgroundImagesDefaults: BackgroundImagesAll = {
  profile: false,
  work: false,
  contact: false,
  nyc: false,
  stockholm: false,
  strasbourg: false,
  geneva: false,
  ottawa: false,
  hamilton: false,
  sf: false
};
  
export default Home;