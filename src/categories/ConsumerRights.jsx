import React from "react";
import './ConsumerRights.css'

function ConsumerRights() {
  const consumerData = [
    {
      title: "Right to Safety",
      description: "You have the right to purchase goods and services that are safe for use. Manufacturers and sellers are obligated to ensure their products meet safety standards. If you encounter a defective or harmful product, you can seek compensation."
    },
    {
      title: "Right to Information",
      description: "Businesses must provide accurate, clear, and complete information about their products or services, including pricing, ingredients, and warranties. Misleading or false advertising is against the law."
    },
    {
      title: "Right to Choose",
      description: "You have the right to access a variety of products and services at competitive prices. Monopolistic practices that limit your options are prohibited."
    },
    {
      title: "Right to Be Heard",
      description: "Consumers have the right to voice their complaints and concerns about goods or services. Businesses are required to provide accessible customer service channels and respond to complaints promptly."
    },
    {
      title: "Right to Redress",
      description: "If you purchase a faulty product or receive poor service, you are entitled to a replacement, refund, or repair. Ensure you keep receipts and other proof of purchase to support your claims."
    },
    {
      title: "Right to Consumer Education",
      description: "You are entitled to information that helps you understand your rights and responsibilities as a consumer. Educational resources help you avoid fraud and make informed decisions."
    },
    {
      title: "Right to a Healthy Environment",
      description: "Businesses must operate in a way that does not harm the environment. As a consumer, you have the right to demand sustainable practices and eco-friendly products."
    },
  ]

  const quickFacts = [
    {text: "A store refusing to accept returns on defective items"},
    {text: "A service provider adding hidden charges to your bill."},
    {text: "False advertising, such as claiming a product has features it does not actually have."},
  ];

  const violated = [
    {
      title: "Gather Evidence",
      instructions: "Keep receipts, contracts, or photos of defective products"
    },
    {
      title: "Contact the Business" ,
      instructions: "Reach out to the seller or service provider to resolve the issue."},
    {
      title: "Seek Legal Help" ,
      instructions: "If the issue remains unresolved, consult with a legal expert or report the business to a consumer protection agency in Cameroon."
    },
    {
      title: "Raise Awareness" ,
      instructions: " Share your experience with others to help them avoid similar issues."
    },
  ]

  return (
      <section className="consumer-rights-section">
      
        <div className="consumers-heading">
          <h1>Understanding Your Consumer Rights</h1>
          <p className="intro">
              As a consumer, you are protected by laws that ensure fair treatment and prevent exploitation. Knowing your rights helps you make informed decisions and resolve disputes effectively. Here's what you need to know
          </p>
        </div>
      
        <div className="all-rights">
          <h2>Quick Facts</h2>

          <div className="consumer-rights-content">
            {consumerData.map((item, index) => (
              <div className="content" key={index}>   
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="quick-facts-content">
          <div className="quick-facts">
            <h2>Examples of Consumer Rights Violations</h2>
            {quickFacts.map((fact, index) => (
              <div className="quick-content">
                <p>{fact.text}</p>
              </div>
            ))}
          </div>
        </div>

      <div className="to-do">
        <h2>What to Do If Your Consumer Rights Are Violated</h2>
        <div className="what-to-do">
          {violated.map((violate, index) => (
            <div className="violate-content" key={index}>
              <h4>{violate.title}</h4>
              <p>{violate.instructions}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-work">
        <p>Need further guidance or legal advice?</p>
        <button><a href="/Experts">Contact an Expert</a></button>
      </div>
      
      </section>
  )
}

export default ConsumerRights;