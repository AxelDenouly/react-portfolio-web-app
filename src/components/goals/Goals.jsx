import React, { useEffect } from "react";
import "./goals.css";
import Image1 from "../../assets/Image1.svg";
import Image2 from "../../assets/Image2.svg";
// import Image3 from "../../assets/Image3.svg";
// import Image4 from "../../assets/Image4.svg";
import Kaali_linux from "../../assets/Kaali_linux.png";
import Data_big from "../../assets/Data_big.png";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Full-Stack Web Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur beatae neque ea, a iste dolore.",
  },
  {
    id: 2,
    image: Image2,
    title: "Mobile App Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur beatae neque ea, a iste dolore.",
  },
  {
    id: 3,
    image: Kaali_linux,
    title: "Ethical Hacking",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur beatae neque ea, a iste dolore.",
  },
  {
    id: 4,
    image: Data_big,
    title: "Data Base Science",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur beatae neque ea, a iste dolore.",
  },
];

const Goals = () => {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="services container section" id="goals">
      <h2 className="section__title">Goals</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id} data-aos="fade-left">
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Goals;
