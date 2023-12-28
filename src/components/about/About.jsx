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
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid" data-aos="zoom-in">
          <div className="about__info">
            <p className="about__description">
              I'm Axel Denouly and a Computer Science lover. <br></br><br></br>I have always been interested in Computer Science and I aim to train in several fields such as Web Develpment, Mobile App Development, Ethical Hacking and Data Science.<br></br>For the moment I am training myself self-taught to acquire knowledge in web development and I would like to have a chance to improve myself from professionals in a company.
            </p>
            <a href="../PDF/New_Responsive_Lebenslauf.pdf" download="New_Responsive_Lebenslauf.pdf" className="btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML</h3>
                <span className="skills_number ">50%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage html_5"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">CSS</h3>
                <span className="skills_number">40%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design css_3"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills_number">30%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage javascript_2"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React.JS</h3>
                <span className="skills_number">35%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage react_js"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Python</h3>
                <span className="skills_number">20%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage python_4"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Tailwind CSS</h3>
                <span className="skills_number">25%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage tailwind_css"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Bootstrap</h3>
                <span className="skills_number">15%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage bootstrap_5"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
