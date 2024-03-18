import React from "react";
import Todo from "../assets/portfolio/Todo.jpg";
import Calculator from "../assets/portfolio/Calc.jpg";
import Tic from "../assets/portfolio/TicTacToe.jpg";

const Portfolio = () => {
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const portfolios = [
    {
      id: 1,
      src: Todo,
      github: "https://github.com/abhishek-475/To-Do-List",
      href: "https://main--lively-lokum-1f23f0.netlify.app/",
    },
    {
      id: 2,
      src: Calculator,
      github: "https://github.com/abhishek-475/Calculator-Js",
      href: "https://main--calculartor-js.netlify.app/",
    },
    {
      id: 3,
      src: Tic,
      github: "https://github.com/abhishek-475/TicTacToe-React",
      href: "https://main--tic-tac-toe-p1.netlify.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => openLinkInNewTab(href)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>

                <button
                  onClick={() => {
                    openLinkInNewTab(github);
                  }}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
