import React, { useState } from "react";
import './Topics.css';
import Search from "../components/Search";

function Topics () {

  const topics = [
    {
      title: "Consumer Rights",
      description: "Understanding your rights as a consumer helps you make informed purchases and seek redress for unfair treatment.",
      steps: [
        "Understand your rights as a buyer",
        "Check for warranties and guarantees",
        "Report unfair business practices",
      ],
    },
    {
      title: "Workplace Rights",
      description: "Workplace rights protect employees from unfair treatment and ensure safe working conditions.",
      steps: [
        "Know your employment contract",
        "Understand labor laws in Cameroon",
        "Report workplace harassment",
      ],
    },
    {
      title: "Property Rights",
      description: "Property laws regulate ownership, renting, and property disputes to protect the rights of landlords and tenants.",
      steps: [
        "Check property ownership documents",
        "Understand landlord-tenant laws",
        "Resolve disputes legally",
      ],
    },
    {
      title: "Arrest & Detention Rights",
      description: "Knowing your legal rights when arrested can help prevent wrongful detention and ensure fair treatment.",
      steps: [
        "Know your rights when arrested",
        "Request legal representation",
        "Understand bail procedures",
      ],
    },
    {
      title: "Marriage & Divorce Laws",
      description: "Marriage and divorce laws guide legal unions, separations, and matters like child custody and alimony.",
      steps: [
        "Legal requirements for marriage",
        "Process for legal separation",
        "Child custody and alimony laws",
      ],
    },
    {
      title: "Business & Contract Law",
      description: "Business laws govern commercial activities and contracts, ensuring fair trade and legal agreements.",
      steps: [
        "Registering a business legally",
        "Understanding contracts",
        "Resolving contract disputes",
      ],
    },
    {
      title: "Cybercrime & Online Safety",
      description: "Cybercrime laws protect users from fraud, hacking, and other online offenses.",
      steps: [
        "Recognize online fraud",
        "Report cybercrime incidents",
        "Understand privacy laws",
      ],
    },
    {
      title: "Inheritance & Wills",
      description: "Inheritance laws guide property distribution after death and help resolve disputes over estates.",
      steps: [
        "How to create a valid will",
        "Understanding inheritance laws",
        "Handling disputes over estates",
      ],
    },
    {
      title: "Traffic & Road Safety Laws",
      description: "Traffic laws ensure road safety and guide procedures in case of accidents or police encounters.",
      steps: [
        "Understanding traffic rules",
        "What to do after an accident",
        "Dealing with police checkpoints",
      ],
    },
    {
      title: "Immigration & Citizenship",
      description: "Immigration laws define visa requirements, residency, and pathways to citizenship.",
      steps: [
        "Visa and residency requirements",
        "Applying for Cameroonian citizenship",
        "Dealing with immigration issues",
      ],
    },
  ];
  
  
  const [openTopics, setOpenTopics] = useState(null);

  function toggleTopics(index) {
    setOpenTopics(openTopics === index ? null : index)
  }



  return (
    <div>

      <div className="topics-headers">
          <h1>Search Legal Topics</h1>
          <h3>Learn how to handle various legal issues effectively.</h3>
        </div>

        < Search />

          <div className="add-hint">
            <p className="hint">
              click on the titles to display the steps
            </p>

            <div className="leg-topics">

              {topics.map((topic, index) => (

                <div className={`legal-topics ${openTopics === index ? "open" : ""}`} key={index} onClick={() => toggleTopics(index)}>


                  <div className="topic-title">{topic.title}</div>
                  <p className="describe">
                    {topic.description}
                  </p>
                
                    {openTopics === index && (
                      <ul className="topics-steps">
                        {topic.steps.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ul>
                    )}

                </div>

            ))}
      </div>
      
      </div>
      <button className="contact-expert">Contact Expert</button>
    </div>
  )
}

export default Topics;