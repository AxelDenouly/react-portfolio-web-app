import React from 'react'
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';


const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Axel Denouly</h1>
        <span className="home__education">Je suis Axel DENOULY, passionné par l'informatique</span>

        <HeaderSocials/>

        <a href="mailto:axeljoo2935@gmail.com" className="btn">Contactez-moi</a>

        <ScrollDown/>
      </div>

      <Shapes/>
    </section>
  )
}

export default Home