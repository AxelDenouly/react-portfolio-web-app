import React, { useEffect, useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";
import AOS from "aos";
import 'aos/dist/aos.css';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work__item" onClick={() => filterItem("Python")}>
          Python
        </span>
        <span className="work__item" onClick={() => filterItem("React JS")}>
          React JS
        </span>
        <span
          className="work__item"
          onClick={() => filterItem("HTML/CSS/JavaScript")}
        >
          HTML/CSS/JavaScript
        </span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work__card" key={id} data-aos="fade-up">
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>

                <span className="work__category">{category}</span>
                <h3 className="work__title">{title}</h3>
                <a href="https://axeldenouly.github.io/Axel-Denouly_Portfolio/portfolio_more.html" target="_blank" className="work__button">
                  <i className="icon-link"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="real__img__link">
        <h3>Works With Real Images</h3>
        <a
          href="https://axeldenouly.github.io/Axel-Denouly_Portfolio/portfolio_more.html"
          target="_blank"
          className="real__link"
        >
          Click Here <i className="icon-link"></i>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
