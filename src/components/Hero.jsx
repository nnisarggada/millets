import React from "react";
import TypeformWidget from "./TypeformWidget";

export default function Hero() {
  return (
    <>
      <TypeformWidget />
      <section
        id="home"
        className="bg-cover w-full h-screen flex flex-col gap-6 bg-primary text-accent text-lg font-medium p-4"
      >
        <h1 className="text-2xl font-black italic">Prithvi Che Shetkari</h1>
        <p>
          A <b>first of it's kind</b> musical play about the importance of
          millet for India
        </p>
        <h1 className="text-xl font-bold">Synopsis</h1>
        <p>
          A musical play narrated by a Kirtankaar about mother nature and soil,
          through a metaphorical format where cotton and millet as characters
          take the audience to a musical ride of emotions,conflict and a journey
          reflecting on every individual's role as Farmers of the Earth!
        </p>
        <div className="h-full flex flex-col justify-evenly">
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
              window.location.href = "#";
            }}
          >
            Book Tickets
          </button>
        </div>
      </section>
    </>
  );
}
