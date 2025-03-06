import React, { useState } from "react";
import './Home.css';
import Testimonials from "../components/Testimonials";


function Home () {

  const [openIndex, setOpenIndex] = useState(null);
  // An array of objects to store the questions and answers for the FAQ section
  const faqData = [
    {
      question: "What is the Cameroon Penal Code?",
      answer:"The Cameroon Penal Code defines crimes and punishments in Cameroon."
    },
    {
      question: "What rights do I have during an arrest?", 
      answer: "You have the right to remain silent and consult a lawyer."
    },
    { question: "How can I contact a legal expert?",
      answer: "Visit the 'Contact Experts' page to connect with a lawyer."
    },
    {
      question: "What should I do if I’m detained by the police?",
      answer: "Remain calm, ask for the reason for your detention, and exercise your right to remain silent until you speak to a lawyer."
    },
    {
      question: "How can I check if my lawyer is licensed to practice?",
      answer: "You can verify a lawyer's credentials by contacting the Cameroon Bar Association or checking their official directory."
    },
    {
      question: "What is the difference between a civil case and a criminal case?",
      answer: "Civil cases involve disputes between individuals or entities (e.g., contracts, property), while criminal cases involve actions deemed harmful to society, prosecuted by the state."
    },  
    {
      question: "Can I represent myself in court?",
      answer: "Yes, you can represent yourself, but it is often recommended to seek legal representation for complex cases."
    },

    {
      question: "What are my rights as a tenant under Cameroonian law?",
      answer: "As a tenant, you have the right to a habitable space, a clear rental agreement, and protection against unlawful eviction."
    },
    {
      question: "How do I report corruption or misconduct by a government official?",
      answer: "Report incidents to the National Anti-Corruption Commission (CONAC) or the appropriate legal authority in your area."
    },
    {
      question: "What should I do if I receive a court summons?",
      answer: "Read the summons carefully, note the date and time, and ensure you attend court as specified. Seek legal advice if needed."
    },
    {
      question: "How can I access free legal aid in Cameroon?",
      answer: "Free legal aid is often available through NGOs, law clinics, or the Cameroon Bar Association for those who cannot afford a lawyer."
    }
  ];

  // Function to toggle the index so as to reveal the answers
  function toggleIndex(index) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>

      <div className="home-page">
        <h1>Welcome to Legal First Aid</h1>
        <p className="firstPara">
          Empowering you with legal knowledge at your fingertips.
        </p>
        <a href="/Rights">
          <button className="home-btn">Read More</button>
        </a>
      </div>

      <section className="about-contents">
        <div className="about-text-content">
          <p>
            Legal First Aid is an educational platform designed to empower 
            Cameroonian citizens with easy-to-understand legal information. 
            Our goal is to simplify the Cameroon Penal Code, answer common 
            legal questions, and connect users with legal experts, so they 
            can confidently navigate their rights and legal challenges.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/lawImg3.jpg" alt="empowering people legally" />
        </div>
      </section>

      <section className="features-section">
        <h2 className="features-header">Features</h2>

        <div className="features-content">
          <div className="feature-card">
            <h4>Know your rights</h4>
            <p>
              Access simplified explanations of the Cameroon Penal Code.
            </p>
           <a href="/Rights">
             <button className="explore-button ">Explore</button>
           </a>
          </div>

          <div className="feature-card">
            <h4>Explore legal topics</h4>
            <p>
              Explore legal topics organized for easy understanding.
            </p>
            <a href="/Topics">
              <button className="explore-button ">Explore</button>
            </a>
          </div>

          <div className="feature-card">
            <h4>Experts Guidance</h4>
            <p>
            Get assistance and answers from legal professionals.
            </p>
           <a href="/Experts">
             <button  className="explore-button ">Explore</button>
           </a>
          </div>

        </div>
      </section>

      {/* SECTION FAQ */}
      <section className="faq-section">
        <h1>WHAT OUR USERS ASK US </h1>
        <p>Click on a question below to reveal the answer</p>
       {faqData.map((item, index) => (

        <div className="faq-item" key={index}>

         <div className="faq-question" onClick={() => toggleIndex(index)}>
          {item.question}
          <span className="arrow">{openIndex === index ? "▼" : "►"}</span>
         </div>

          {openIndex === index && (
             <div className="faq-answer">{item.answer} </div>
          )}

       </div>
       ))}

       <div className="refer-experts">
        <p className="para-refer-experts">
          For detailed guidance, please contact one of our verified legal experts.
        </p>
        <a href="/Experts">
          <button>Contact Expert</button>
        </a>
       </div>

      </section>

      <Testimonials />

      <section className="cta-section">
        <h1>Empower Yourself with the Right Legal Knowledge.</h1>
        <div className="cta-content">
          <p>
            Take charge of your legal journey today! Whether you're navigating complex legal issues or simply seeking to understand your rights, our platform equips you with the tools, resources, and expert guidance you need. Don't wait—empower yourself now and make informed decisions with confidence.
          </p>
          <div className="cta-buttons">
           <a href="/Rights">
              <button className="get-started">Get Started</button>
           </a>
            <a href="/Experts">
             <button className="cta-experts">Contact a Lawyer</button>
            </a>
        </div>
        
        </div>
      </section>

    </div>
  )
}

export default Home;