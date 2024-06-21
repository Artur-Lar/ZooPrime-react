import React from "react";
import arrows from "../assets/images/arrows.png";
import imgForHelpAnimals from "../assets/images/img-for-help-animals.png";
import "./style-ourPets.css";

const OurPets = () => {
  return (
    <section className="marginSection helpingAnimals">
      <div className="events-title-container">
        <h1>Помощь вашим животным</h1>
        <div className="arrows">
          <img src={arrows} alt="arrows" />
        </div>
      </div>
      <div className="blocks-container">
        <div className="block-for-animalHelp">
          <img src={imgForHelpAnimals} alt="img-for-help-animals" />
          <p className="event-title">Муня, девочка, 2,5 года</p>
          <p className="event-title">
            Собака — это домашнее животное с продолговатым поджарым телом,
            длинным хвостом и круглой головой. У неё большие глаза золотистого,
            зелёного или орехового цвета.
          </p>
          <button className="btn want-help-btn">Помочь</button>
        </div>
        <div className="block-for-animalHelp">
          <img src={imgForHelpAnimals} alt="img-for-help-animals" />
          <p className="event-title">Муня, девочка, 2,5 года</p>
          <p className="event-title">
            Собака — это домашнее животное с продолговатым поджарым телом,
            длинным хвостом и круглой головой. У неё большие глаза золотистого,
            зелёного или орехового цвета.
          </p>
          <button className="btn want-help-btn">Помочь</button>
        </div>
        <div className="block-for-animalHelp">
          <img src={imgForHelpAnimals} alt="img-for-help-animals" />
          <p className="event-title">Муня, девочка, 2,5 года</p>
          <p className="event-title">
            Собака — это домашнее животное с продолговатым поджарым телом,
            длинным хвостом и круглой головой. У неё большие глаза золотистого,
            зелёного или орехового цвета.
          </p>
          <button className="btn want-help-btn">Помочь</button>
        </div>
      </div>
    </section>
  );
};

export default OurPets;
