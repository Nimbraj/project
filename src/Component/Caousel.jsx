import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/slide1.jpg",
    title: "First slide label",
    description: "Some representative placeholder content for the first slide.",
  },
  {
    image: "/images/slide2.jpg",
    title: "Second slide label",
    description: "Some representative placeholder content for the second slide.",
  },
  {
    image: "/images/slide3.jpg",
    title: "Third slide label",
    description: "Some representative placeholder content for the third slide.",
  },
  {
    image: "/images/slide4.jpg",
    title: "Fourth slide label",
    description: "Some representative placeholder content for the fourth slide.",
  },
  {
    image: "/images/slide5.jpg",
    title: "Fifth slide label",
    description: "Some representative placeholder content for the fifth slide.",
  },
];

const CarouselWithCaptions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentIndex(index);
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-screen mx-auto overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 relative h-[600px]"
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[600px] object-cover"
            />
            {/* Caption */}
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full text-center hidden md:block">
              <h5 className="text-xl font-semibold">{slide.title}</h5>
              <p className="text-sm">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 z-10"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 z-10"
      >
        ›
      </button>
    </div>
  );
};

export default CarouselWithCaptions;
