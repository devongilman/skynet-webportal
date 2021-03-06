import React from "react";
import TopSwoosh from "../../svg/TopSwoosh";
import "./App.scss";
import StickyTopMessage from "../StickyTopMessage/StickyTopMessage";
import { HomeTop, HomeUpload, HomeBuilt, HomeSamples, HomeStay, HomeNetwork, Footer } from "../";

function App() {
  return (
    <React.Fragment>
      <StickyTopMessage />
      <div className="app">
        <TopSwoosh className="top-swoosh" />

        <div className="width">
          <HomeTop />
          <HomeUpload />
          <HomeBuilt />
          <HomeSamples />
        </div>

        <div className="home-white">
          <div className="width">
            <HomeStay />
            <HomeNetwork />
          </div>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
