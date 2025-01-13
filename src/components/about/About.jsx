import React, { useEffect } from 'react'
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";
import AOS from "aos";
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">À Propos de moi</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid" data-aos="zoom-in">
          <div className="about__info">
            <p className="about__description">
              Je suis Axel DENOULY, un passionné d'informatique. <br></br><br></br>Étudiant passionné par l'informatique et les technologies numériques, je poursuis actuellement une formation en 1ère année à SUPINFO Lyon. Depuis mon enfance en Côte d’Ivoire, j’ai été fasciné par le digital, l’électronique, et l’innovation technologique, ce qui m’a conduit à explorer et développer mes compétences, même de manière autodidacte.<br></br>
              Mon objectif est de me spécialiser en cybersécurité tout en renforçant mes bases en développement web et mobile. Je suis déterminé à allier ces expertises pour contribuer à des solutions technologiques innovantes et sécurisées.
            </p>
            <a href="../PDF/CV_Axel_Denouly_1.pdf" download="CV_Axel_Denouly_1.pdf" className="btn">
              Télécharger mon CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="">
                <h2 className='h2_padd'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hard Skills :</h2>
                <div>
                  <ul>
                    <li><h3>Langages de programmation :</h3></li>
                    <p>Python, C, PHP, JavaScript</p>
                  </ul>
                  <ul>
                    <li><h3>Framework :</h3></li>
                    <p>React.js</p>
                  </ul>
                  <ul>
                    <li><h3>Technologies web :</h3></li>
                    <p>HTML, CSS</p>
                  </ul>
                  <ul>
                    <li><h3>Outils bureautiques :</h3></li>
                    <p>Microsoft Office</p>
                  </ul>
                </div>
              </div>
            </div>

            <div className="skills__data">
              <div className="">
                <h2 className='h2_padd'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Soft Skills :</h2>
                <div>
                  <ul>
                    <li><h3>Optimiste :</h3></li>
                    <p>Je ne me décourage pas facilement et j'essaie de toujours voir le bon côté des choses.</p>
                  </ul>
                  <ul>
                    <li><h3>Adaptabilité :</h3></li>
                    <p>J'ai appris a m'adapter a plusieurs
                        postes pendant mes jobs étudiant au restaurant.
                    </p>
                  </ul>
                  <ul>
                    <li><h3>Stoïque :</h3></li>
                    <p> J’aime garder le contrôle de mes
                      émotions quelque soit la situation.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
