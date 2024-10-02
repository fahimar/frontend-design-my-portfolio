import React, { useState } from "react";
import Header from "../common/Header";

interface Testimonial {
  imageUrl: string;
  name: string;
  title: string;
  testimonial: string;
}

const testimonials: Testimonial[] = [
  {
    imageUrl: "/images/testimonial_img-1.png",
    name: "John Doe",
    title: "CEO",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
  {
    imageUrl: "/images/testimonial_img-2.png",
    name: "Jane Smith",
    title: "Marketing Director",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
  },
  {
    imageUrl: "/images/testimonial_img-3.png",
    name: "Fahim Al Rashid",
    title: "Software Engineer",
    testimonial:
      "My name is Fahim Al Rashid, and I have recently graduated from Ahsanullah University of Science and Technology with a Bachelor’s degree in Computer Science. Throughout my academic career, I’ve always been driven by a deep interest in technology and its potential to solve real-world problems.",
  },
];

function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Function to handle dot click
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="w-full py-16">
      <Header
        title="Testimonials"
        description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium."
      />

      {/* Single Testimonial Display */}
      <div className="flex justify-center items-center mt-10">
        <div className="w-full flex-col md:flex-row max-w-4xl bg-white p-8 rounded-lg shadow-md flex items-center">
          {/* Image on the left */}
          <div className="flex-shrink-0 mr-8">
            <img
              src={testimonials[activeIndex].imageUrl}
              alt={testimonials[activeIndex].name}
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>
          {/* Testimonial text on the right */}
          <div>
            <p className="text-gray text-lg italic mb-6">
              "{testimonials[activeIndex].testimonial}"
            </p>
            <h3 className="text-xl font-semibold">
              {testimonials[activeIndex].name}
            </h3>
            <span className="text-primary font-medium">
              {testimonials[activeIndex].title}
            </span>
          </div>
        </div>
      </div>

      {/* Dots (pagination indicators) */}
      <div className="flex justify-center mt-6">
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-[57px] h-[16px] rounded-lg cursor-pointer ${
                index === activeIndex ? "bg-[#FD6F00]" : "bg-[#D9D9D9]"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
