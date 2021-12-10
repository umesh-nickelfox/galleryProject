import React, { useState, useEffect } from "react";
import ImageCard from './imageCard';
import Header from './header';
import Logout from "./imageCard/logout";
import axios from 'axios';


function HomePage() {
  const [images, setImages] = useState([]);
  const [darkMode, setDarkmode] = useState(false);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = (count = 16) => {
    const apiRoot = "https://api.unsplash.com";
    //const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=DAMCMRUzXUyOVNIQNKIpa7YVmVMoXWiGIMH_JX_Ul5E&count=${count}`)
      .then(res => {
        setImages([...images, ...res.data]);
      })
  }

  return (


    <div className={darkMode ? "dark-mode" : "light-mode"}>

      <Header setDarkmode={setDarkmode} darkMode={darkMode} />
      <div className="wrapper-image">


        {images.map(image => (
          <ImageCard url={image.urls.thumb} key={image.id} />
        ))}
        <Logout />
      </div>
    </div>


  );
}

export default HomePage;
