import Services from "../epic/services/Services";
import HeroFooter from "../epic/hero-footer/HeroFooter";
import About from "../epic/about/About"
import React from "react";
import Reviews from "../epic/review-section/Reviews";
import {Hero} from "../epic/hero";

export default function Home() {
  return (
    <React.Fragment>
      <div style={{backgroundImage: `url(https://boostingworld.gg/img/home-page/home-header.svg)`}}>
        <div>
          <Hero/>
        </div>
        <div style={{position:"relative"}}>
          <Services/>
          <HeroFooter/>
        </div>
      </div>
      <About/>
      <Reviews/>
      {/*<Footer/>*/}
    </React.Fragment>
  )
}
