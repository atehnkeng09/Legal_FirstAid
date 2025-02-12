import React from "react";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import './Rights.css';

function Rights () {

  const rightsData = [
    { 
      title: "Arrest Rights", description: "Understand what to do if you're arrested.", link: "/ArrestRights"
     },
    { 
      title: "Workplace Rights", description: "Know your rights at work.", link:"/WorkplaceRights" 
    },
    { 
      title: "Property Rights", description: "Protect your property and ownership.", link: "/PropertyRights" 
    },
    { 
      title: "Family Rights", description: "Navigate family-related legal matters.", link: "/FamilyRights"
     },
    { 
      title: "Consumer Rights", description: "Learn about your rights as a consumer.", link: "/ConsumerRights" 
    },
  ]

  return (
    
    <div className="section-rights">

      <div className="left-header">
        <Link to="/">Home</Link>
        <Link to="/Rights">Know your rights</Link>
        <Link to="/Topics">Legal Topics</Link>
        <Link to="/Experts">Contact Experts</Link>
      </div>

      <div className="rights-first-content">
        <h1 className="know-rights">Know Your Rights</h1>
        <p
          className="empower">Empowering you with the knowledge to protect yourself
        </p>
      </div>

      <section className="rights-categories">
        {rightsData.map((category, index) => (

            <div className="rights-content" key={index}>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <button>
               <Link to={category.link}>Learn More</Link>
              </button>
            </div>
          
        ))}
      </section>

      <section>
        <Testimonials />
      </section>

      <section className="rights-cta">
        <p>Need help understanding your rights?</p>
        <button>Contact an Expert</button>
      </section>
    </div>
  )
}

export default Rights;