import React from "react";
import "./Hero.css";
import Nav from "./Nav";

export default function Hero() {
  return (
    <div className="hero-section">
      <Nav />
      <div
        id="home"
        className="pt-10 flex flex-col md:flex-row justify-center items-center p-3"
      >
        <div className="self-center">
          <p className="fill-white text-4xl mb-5">
            Best Mind Care service for you.
          </p>
          <p className="fill-gray-950 mb-3">
            Experience the best health care by using our app
          </p>
          <button
            className="cursor-pointer bg-blue-500 p-3 rounded-lg text-white"
            onClick={() =>
              document
                .querySelector("#call")
                ?.scrollIntoView({ behaviour: "smooth" })
            }
          >
            Get Started
          </button>
        </div>
        <div className="self-center mb-3">
          <img src="hero-pic.png" alt="doctor with patient" />
        </div>
      </div>
    </div>
  );
}
