import React from "react";

export default function Cast() {
  const CastDiv = ({ pos, name }) => {
    return (
      <div>
        <h2 className="text-2xl font-bold">{pos}</h2>
        <p>{name}</p>
      </div>
    );
  };

  return (
    <>
      <section
        id="cast"
        className="bg-cover w-full h-screen flex flex-col gap-6 bg-primary text-accent text-lg font-medium p-4"
      >
        <h1 className="text-2xl font-black italic">
          Cast
          <br />
          and crew
        </h1>
        <div className="h-full flex flex-col justify-between p-4">
          <CastDiv pos="Director" name="John Doe" />
          <CastDiv pos="Director" name="John Doe" />
          <CastDiv pos="Director" name="John Doe" />
          <CastDiv pos="Director" name="John Doe" />
          <CastDiv pos="Director" name="John Doe" />
        </div>
      </section>
    </>
  );
}
