import React, { useEffect } from "react";
import "./goals.css";
import Image1 from "../../assets/Image1.svg";
import Image2 from "../../assets/Image2.svg";
// import Image3 from "../../assets/Image3.svg";
import Linux_image from "../../assets/Linux_image.png";
import Kaali_linux from "../../assets/Kaali_linux.png";
import Data_big from "../../assets/Data_big.png";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Développeur Full-Stack",
    description:
      "J'ai aimé cette aspect de l'informatique pendant mes cours sur Udemy. C'est un domaine passionnant qui m'intéresse aussi et j'aimerais avoir une très bonne base dans ce domaine, ce qui serait complémentaire avec les autres spécialités que j'aimerais apprendre.",
  },
  {
    id: 2,
    image: Image2,
    title: "Développement d'App Mobile",
    description:
      "Je trouve cette sépecialié de l'informatique aussi passionnante et importante car nous faisons de nos jours presque tout sur nos appareils mobile. Cela me serait donc bénéfique à moi-même et à mon entourage de savoir développer des Apps mobile et aussi d'être utile à mon entreprise car je crois que c'est toujours bien d'avoir une personne de notre entourage qui est un couteau suisse, et moi je veux être cette personne.",
  },
  {
    id: 3,
    image: Kaali_linux,
    title: "Cyber Securité",
    description:
      "La cyber sécurité est un domaine qui m'a toujours passionné. Depuis l'enfance, j'ai toujours aimé mettre des mots de passe sur des appareils pour les sécuriser ou aussi pour taquiner mes connaissances qui étaient tous obligés d'avoir ma permission avant d'utiliser mes appareils. Avec le temps, on a tous constaté que la sécurité numérique est devenue primordiale. Je veux donc faire partie de ces personnes qui aide à rendre ce monde numérique plus sûr.",
  },
  {
    id: 4,
    image: Data_big,
    title: "Science des bases de données",
    description:
      "Savoir gerer des bases de données est aussi une chose importante de nos jours, Cela aide dans beaucoup de domaines, et c'est aussi une obligation d'en avoir une bonne base quand on veut faire du Full Stack. Je veux aussi apprendre ce domaine encore une fois pour être utile à mon entreprise en tant que personne polyvalente et aussi pour moi-même car j'aime avoir diverses connaissances.",
  },
];

const Goals = () => {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="services container section" id="goals">
      <h2 className="section__title">Objectifs</h2>

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
