import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

function Testimonials () {

  const testimonials = [
    {
      name: "Mark Jones",
      role: "Entrepreneur",
      feedback: "Legal First Aid helped me understand my rights during a business dispute!",
      avatar: "/images/black-1.jpg"
    },
    {
      name: "Jane Smith",
      role: "Student",
      feedback: "I easily found resources to navigate a legal issue in school.",
      avatar: "/images/suit.jpg",
    },
    {
      name: "Michael Brown",
      role: "Freelancer",
      feedback: "This platform connected me with a great lawyer. Highly recommended!",
      avatar: "/images/black-3.jpg",
    },
    {
      name: "Emily Johnson",
      role: "Teacher",
      feedback: "The FAQs and legal topics were easy to read and super helpful!",
      avatar: "/images/design.jpg",
    },
    {
      name: "Chris Williams",
      role: "Small Business Owner",
      feedback: "I got clarity on the Cameroon Penal Code in minutes. Amazing platform!",
      avatar: "/images/black-3.jpg",
    },
    {
      name: "Sophia Lee",
      role: "Designer",
      feedback: "As a creative professional, I learned about copyright laws that protect my work.",
      avatar: "/images/design-2.jpg",
    },
    {
      name: "Daniella Kim",
      role: "Software Developer",
      feedback: "I found answers to my questions on intellectual property rights here.",
      avatar: "/images/home.jpg",
    },
    {
      name: "Olivia Martinez",
      role: "Parent",
      feedback: "This platform helped me handle a legal dispute regarding my child’s education.",
      avatar: "/images/woman-2.jpg",
    },
    {
      name: "Liam Harris",
      role: "Journalist",
      feedback: "I used this site to better understand my freedom of speech rights.",
      avatar: "/images/Women-suit.jpg",
    },
    {
      name: "Isabella Taylor",
      role: "Healthcare Worker",
      feedback: "The legal experts provided guidance on workplace disputes. Thank you!",
      avatar: "/images/woman-1.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    transition: 500,
  };

  return (
    <section className="
    testimonials">
      <h1>What our users say</h1>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">

            <img src={testimonial.avatar} alt={testimonial.name} className="avatar"/>
            <p className="feedback">"{testimonial.feedback}"</p>
            <p>
              <strong>{testimonial.name}</strong> - {testimonial.role}
            </p>
            
          </div>
        ))}

      </Slider>
    </section>
  );
}

export default Testimonials;