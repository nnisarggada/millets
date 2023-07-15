import React from "react";
import modiImage from "../assets/images/modi.png";
import milletImage from "../assets/images/millet-map.png";

export default function Iyom() {
  return (
    <>
      <section
        id="iyom"
        className="bg-cover w-full flex flex-col gap-6 bg-primary text-accent text-lg font-medium p-4"
      >
        <h1 className="text-2xl font-black italic">
          International Year Of
          <br />
          Millets
        </h1>
        <p>
          Millets are collective group of small seeded annual grasses that are
          grown as grain crops, primarily on marginal land in dry areas of
          temperate, sub tropical and tropical regions.
        </p>
        <p>
          Government of India had proposed to United Nations for declaring 2023
          as International Year of Millets (IYOM). The proposal of India was
          supported by 72 countries and United Nation’s General Assembly (UNGA)
          declared 2023 as International Year of Millets on 5th March, 2021.
          Now, Government of India has decided to celebrate IYOM, 2023 to make
          it peoples’ movement so that the Indian millets, recipes, value added
          products are accepted globally.
        </p>
        <div>
          <img src={milletImage} alt="Millets" id="millet-map" />
        </div>

        <h2 className="text-xl font-bold">
          Implementing Narendra Modi's Vision
        </h2>
        <img src={modiImage} alt="Narendra Modi" />
        <p>
          Prime Minister Narendra Modi aims to make IYOM 2023 a 'People's
          Movement' and position India as the 'Global Hub for Millets'.
        </p>
        <p className="italic">
          “Raising awareness to create 'Millet Mindfulness' is an important part
          of this movement. Both institutions and individuals can make a
          tremendous impact. I am positive that the International Year of
          Millets 2023 will start a mass movement towards a secure, sustainable
          and healthy future.”
        </p>
        <p className="italic font-bold">~ Narendra Modi</p>
      </section>
    </>
  );
}
