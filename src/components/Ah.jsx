import React from "react";
import ahImage from "../assets/images/artistichumans.png";

export default function Ah() {
  return (
    <>
      <section
        id="about us"
        className="bg-cover w-full flex flex-col gap-6 bg-primary text-accent text-lg font-medium p-4 md:text-xl md:gap-8 xl:h-[calc(100vh-6rem)] xl:justify-center xl:text-3xl xl:p-10"
      >
        <h1 className="text-2xl font-black italic md:text-3xl xl:text-5xl">
          Artistic Humans
        </h1>
        <div className="flex flex-col gap-6 xl:flex-row">
          <div className="flex flex-col gap-6 xl:w-3/4">
            <h2 className="font-bold">
              “Create a platform for humans to discover the artistic human
              within themselves”
            </h2>
            <p>
              Through the medium of art, empower visionaries to create
              innovative solutions, build a community of support groups, promote
              art tourism.
            </p>
            <p>
              We are a community of creators and innovators. Our wings of
              operations includes production and development of professional
              plays, art research and development, live content, curating
              experiences, conducting workshops and enabling initiatives
              impacting human lives. We work with schools, colleges, institutes
              and businesses.
            </p>
          </div>
          <div className="flex flex-col md:flex-row-reverse md:justify-evenly xl:flex-col-reverse">
            <div className="w-full flex justify-evenly text-3xl md:flex-col md:text-4xl md:w-auto xl:flex-row">
              <a href="tel:+919930732829">
                <i class="fa-solid fa-phone"></i>
              </a>
              <a href="mailto:artistichumansinfo@gmail.com">
                <i class="fa-solid fa-envelope"></i>
              </a>
              <a href="https://facebook.com/artistichumans">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com/theartistichumans">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
              <a href="https://twitter.com/ArtisticHumans">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="https://linkedin.com/company/artistic-humans">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://artistichumans.com">
                <i class="fa-solid fa-globe"></i>
              </a>
            </div>
            <img src={ahImage} alt="Artistic Humans" id="ah-logo" />
          </div>
        </div>
      </section>
    </>
  );
}
