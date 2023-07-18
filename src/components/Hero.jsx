import React from "react";
import TypeformWidget from "./TypeformWidget";
import posterFront from "../assets/images/1.png";
import posterBack from "../assets/images/2.png";

export default function Hero() {
  return (
    <>
      <TypeformWidget />
      <section
        id="home"
        className="bg-cover w-full flex flex-col gap-6 bg-primary text-accent text-lg font-medium p-4"
      >
        <h1 className="text-2xl font-black italic">Pruthvi Che Shetkari</h1>
        <p>
          A <b>first of it's kind</b> musical play about Millets to celebrate
          <br />
          <b>
            <i>'International Year of Millets 2023'</i>
          </b>
        </p>
        <h1 className="text-xl font-bold">Synopsis</h1>
        <p>
          A musical play narrated by a Kirtankaar about mother nature and soil,
          through a metaphorical format where cotton and millet as characters
          take the audience to a musical ride of emotions,conflict and a journey
          reflecting on every individual's role as Farmers of the Earth!
        </p>
        <div className="h-96 w-64 bg-black self-center object-cover">
          <img src={posterFront} className="h-full w-full" />
        </div>
        <div className="h-96 w-64 bg-black self-center object-cover">
          <img src={posterBack} className="h-full w-full" />
        </div>
        <div className="h-full flex flex-col gap-6 mt-12">
          <button
            className="w-64 h-16 self-center bg-secondary text-primary font-bold rounded-xl transition-all hover:drop-shadow-2xl hover:scale-110"
            onClick={() => {
              document.getElementById("form").classList.remove("hidden");
              document.getElementById("form").classList.add("flex");
              document.body.classList.add("overflow-hidden");
            }}
          >
            Organise Shows
          </button>
          <button
            className="w-64 h-16 self-center bg-secondary text-primary font-bold rounded-xl transition-all hover:drop-shadow-2xl hover:scale-110"
            onClick={() => {
              window.location.href = "https://insider.in/--jul28-2023/event";
            }}
          >
            Book Tickets
          </button>
        </div>
      </section>
    </>
  );
}
