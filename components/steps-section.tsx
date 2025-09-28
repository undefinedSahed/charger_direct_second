"use client";

import { useRef } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Download the Charger Direct App",

    icon: "/images/image1.png",
  },
  {
    number: "02",
    title: "",
    icon: "/images/image2.png",
  },
  {
    number: "03",
    title: "Find the nearest station on the map in the app",
    icon: "/images/image3.png",
  },
  {
    number: "04",
    title: "Scan the QR code and take the powerbank",
    icon: "/images/image4.jpg",
  },
  {
    number: "05",
    title: "Use it as long as you need",
    icon: "/images/image5.png",
  },
  {
    number: "06",
    title: "Return the powerbank to any PowerUP station",
    icon: "/images/image6.png",
  },
];

export function StepsSection() {
  const ref = useRef(null);

  return (
    <section id="how-it-works" className="py-20 bg-secondary/10" ref={ref}>
      <div className="container mx-auto px-4">

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center overflow-x-hidden">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative"
            >
              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent z-0"
                />
              )}

              <div className="relative z-10">
                {/* Step Card */}
                <div
                  className={`rounded-2xl flex w-full flex-col ${index % 2 === 0 ? "justify-end" : "justify-start"
                    } p-8 h-full hover:border-primary/50 transition-colors duration-300 min-h-[450px]`}
                  style={{
                    background: `url(${step.icon})`,
                    backgroundSize:
                      index === 1 || index === 3 ? "contain" : "cover",
                    backgroundPosition: "center",
                    // backgroundRepeat: "no-repeat",
                  }}
                >
                  {" "}
                  {/* Step Number */}
                  <div
                    className={`text-[#9a6bff] font-bold text-5xl mb-3 ${index === 0 ? "text-white" : ""}`}
                  >
                    {step.number}
                  </div>
                  {/* Content */}
                  <div className="">
                    <h3 className="text-xl font-semibold mb-4 text-balance dark:text-black">
                      {step.title}
                    </h3>
                    {
                      index === 0 && (
                        <Link href="https://apps.apple.com/gb/app/charger-direct/id6449253613" target="_blank" rel="noopener noreferrer">
                          <Button className="bg-white text-black hover:bg-gray-200 mt-auto px-6 py-6 rounded-3xl cursor-pointer">
                            Download the App
                          </Button>
                        </Link>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
