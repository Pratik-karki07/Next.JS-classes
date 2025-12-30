"use client";

import { useState } from "react";

const images = [
  "/Pic1.jpg",
  "/Pic2.jpg",
  "/Pic3.jpg",
];

export default function SimpleCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg">
      {/* Image */}
      <img
        src={images[index]}
        alt="carousel"
        className="w-full h-56 md:h-96 object-cover transition-all duration-500"
      />

      {/* Prev */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded"
      >
        ❮
      </button>

      {/* Next */}
      <button
        onClick={next}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
