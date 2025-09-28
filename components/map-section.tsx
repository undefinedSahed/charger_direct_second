"use client";

import Image from "next/image";

export default function CoverageMapUK() {
  return (
    <section className="relative overflow-hidden lg:py-20 py-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#ced2fb]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="grid lg:grid-cols-2 items-start">
          <div className="text-center lg:text-left mb-10 lg:mb-0 px-5 max-w-sm">
            <p className="text-purple-500 uppercase tracking-wide font-medium">
              Coverage Map
            </p>
            <h2 className="text-5xl font-bold mt-2 leading-16">BRITAIN IS COVERED</h2>
          </div>
          <div className="relative">
            {/* Background glow */}
            <div
              className="absolute inset-0 gradient-secondary rounded-3xl blur-3xl opacity-20 scale-110"
            />

            <Image
              src="/images/UK.png"
              alt="Services Image"
              width={600}
              height={600}
              className="relative rounded-3xl z-10 mx-auto"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
