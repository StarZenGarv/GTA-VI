import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowDown } from "react-icons/fa6";

function App() {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      opacity: 0,
      duration: 1.9,
      delay: -1.75,
      transformOrigin: "50% 50%",
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg")?.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  }, []);

  useGSAP(() => {
    if (!showContent) return;
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".text", { x: `${xMove * 0.4}%` });
      gsap.to(".sky", { x: xMove });
      gsap.to(".bg", { x: xMove * 3.5 });
    });
  }, [showContent]);

  return (
    <div className="relative">
      {/* SVG Mask Intro */}
      <div className="svg fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden">
        <svg
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            scale={1.2}
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {/* Main Content */}
      {showContent && (
        <div>
          <div className="main relative w-full min-h-screen bg-black overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src="./sky.png"
                className="sky absolute inset-0 w-full h-full object-cover scale-[1.1]"
                alt="Sky"
                loading="lazy"
              />
              <img
                src="./bg.png"
                className="bg absolute inset-0 w-full h-full object-cover scale-[1.1]"
                alt="Background"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div className="text absolute top-10 left-1/2 -translate-x-1/2 text-white z-10 pointer-events-auto text-center">
              <h1 className="text-[7rem] md:text-[8rem] lg:text-[10rem] leading-none -ml-10 lg:-ml-40">
                grand
              </h1>
              <h1 className="text-[7rem] md:text-[8rem] lg:text-[10rem] leading-none ml-10 lg:ml-20">
                theft
              </h1>
              <h1 className="text-[7rem] md:text-[8rem] lg:text-[10rem] leading-none -ml-10 lg:-ml-40">
                auto
              </h1>
            </div>

            {/* Character Image */}
            <img
              src="./girlbg.png"
              alt="Character"
              loading="lazy"
              className="character absolute -bottom-[20%] md:-bottom-[55%] lg:-bottom-[64%] left-1/2 -translate-x-1/2 scale-[0.5] md:scale-[0.45] lg:scale-[0.4] z-20"
            />

            {/* Navbar */}
            <div className="absolute top-5 left-5 z-30">
              <div className="space-y-1">
                <div className="w-10 h-2 bg-white" />
                <div className="w-8 h-2 bg-white" />
                <div className="w-6 h-2 bg-white" />
              </div>
            </div>
            <h1 className="absolute left-[17%] md:left-[6%] top-2 text-white text-xl md:text-2xl lg:text-4xl z-30 font-bold">
              ROCKSTAR
            </h1>

            {/* Bottom Bar */}
            <div className="btmbar ml-5">
              <div className="scroll-down absolute bottom-10 text-xl md:text-2xl flex gap-3 items-center">
                <FaArrowDown />
                <p className="text-base md:text-lg -ml-2 font-[Helvetica]">
                  Scroll Down
                </p>
              </div>
              <div className="ps5">
                <img
                  src="./ps5.png"
                  alt="PS5 Console"
                  loading="lazy"
                  className="absolute -bottom-[8%] left-[10%] scale-[0.25] md:scale-[0.2] z-[100]"
                />
              </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 w-full py-10 bg-gradient-to-t from-black to-transparent z-10" />
          </div>

          {/* Secondary Page */}
          <div className="spage relative w-full min-h-screen bg-black flex flex-col md:flex-row items-center justify-center gap-10 px-5 md:px-10 py-10">
            <div className="left w-full md:w-1/2 flex justify-center items-start">
              <img
                src="./girlspage.png"
                className="scale-[0.8] max-w-full h-auto"
                alt="Girl Second Page"
                loading="lazy"
              />
            </div>
            <div className="right text-white w-full md:w-1/2">
              <h1 className="text-3xl md:text-5xl font-bold">Still Running,</h1>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                not Hunting
              </h1>
              <div className="font-[Helvetica] text-sm md:text-base space-y-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, temporibus fugiat, molestiae neque sapiente aperiam
                  ducimus unde nesciunt animi ipsum laudantium nobis quia.
                </p>
                <p>
                  Molestiae, iste. Eveniet repellendus praesentium unde tenetur
                  similique quam dolores, dolor nihil corrupti dolorem
                  exercitationem id corporis, quod quibusdam sit consequatur
                  asperiores.
                </p>
                <p>
                  Fugit vero, optio maiores voluptates quos dolore praesentium
                  ipsam rem asperiores nesciunt. Pariatur tempora provident sunt
                  dolorum nesciunt.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="https://www.rockstargames.com/VI"
                  target="_blank"
                  className="bg-yellow-500 px-6 py-3 text-lg md:text-2xl text-black font-extrabold"
                >
                  DOWNLOAD NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
