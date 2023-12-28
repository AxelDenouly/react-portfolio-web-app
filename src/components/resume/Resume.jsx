import React, { useEffect } from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";

const Resume = () => {

  // Animation On Scroll (AOS)
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">
        <div className="timeline grid" data-aos="fade-right">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>

        <div className="timeline grid" data-aos="fade-left">
          {Data.map((val, ind) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={ind}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
