import React from "react";

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="bg-cover w-full h-screen flex flex-col gap-6 bg-primary text-accent text-lg font-medium p-4 pt-24"
      >
        <h1 className="text-2xl font-black italic">
          Prithvi Che Shetkari
          <br />
          (Wait-A-Millet)
        </h1>
        <p>
          An entertaining and informative play about the importance of millet
          for India
        </p>
        <h1 className="text-xl font-bold">Synopsis</h1>
        <p>
          A musical play narrated by a Kirtankaar about mother nature and soil,
          through a metaphorical format where cotton and millet as characters
          take the audience to a musical ride of emotions,conflict and a journey
          reflecting on every individual's role as Farmers of the Earth!
        </p>
        <button
          className="w-64 h-16 self-center bg-secondary text-primary font-bold rounded-xl transition-all hover:drop-shadow-2xl hover:scale-110"
          onClick={() => {
            window.location.href = "/shows";
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
      </section>
    </>
  );
}
