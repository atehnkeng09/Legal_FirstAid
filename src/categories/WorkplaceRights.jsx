import React, {useState} from "react";
import './WorkplaceRights.css';

function WorkplaceRights ()  {

  const [openIndex, setOpenIndex] = useState(null);

    const workRights = [
      {
        title: "Fair Pay & Wages",
        description: "Employees have the right to receive fair and equal pay for their work, including minimum wage protections, overtime pay, and equal pay for equal work regardless of gender or background.",
        button: "Contact Expert"
      },
      {
        title: "Workplace Discrimination Protection",
        description: "Laws protect workers from discrimination based on race, gender, age, disability, religion, or other protected characteristics. Employers must provide equal opportunities and fair treatment.",
         button: "Contact Expert"
      },
      {
        title: "Harassment Policies",
        description: "Workplaces must be free from harassment, including sexual harassment and bullying. Employees have the right to report misconduct without fear of retaliation.",
        button: "Contact Expert"
      },
      {
        title: "Safe Working Conditions",
        description: "Employers are required to maintain a safe and healthy work environment. This includes providing necessary safety equipment, training, and measures to prevent workplace injuries.",
        button: "Contact Expert"
      },
      {
        title: "Right to Unionize",
        description: "Workers have the right to join or form a union to advocate for better wages, benefits, and working conditions without employer interference or punishment.",
        button: "Contact Expert"
      },
      {
        title: "Wrongful Termination Protection",
        description: "Employees cannot be fired without just cause or in retaliation for reporting violations, discrimination, or exercising their legal rights in the workplace.",
        button: "Contact Expert"
      }
    ]

    const workFaq = [
      {
        question: "What should I do if my employer refuses to pay overtime?",
        answer: "If your employer refuses to pay overtime, start by reviewing your employment contract and local labor laws. Keep a record of your hours worked and any communication regarding overtime. If the issue persists, file a complaint with your labor department or seek legal assistance"
      },
      {
        question: " Can I be fired for reporting harassment?",
        answer: "No, it is illegal for an employer to fire or retaliate against you for reporting workplace harassment. If you experience retaliation, document the incidents and report them to your HR department or labor authorities."
      },
      {
        question: "How do I file a workplace complaint?",
        answer: "You can file a complaint internally through your company's HR department. If the issue is not resolved, you may escalate the complaint to a labor rights organization or government agency specializing in workplace protections."
      },
      {
        question: "Do I have the right to work from home?",
        answer: "Remote work is not a guaranteed right in most cases, but it depends on your contract and company policies. Some labor laws provide flexibility for employees with disabilities or health concerns."
      },
      {
        question: " What should I do if I face discrimination at work?",
        answer: "Report the incident to HR and document all discriminatory actions. If the issue is unresolved, file a complaint with an equal employment opportunity commission or labor rights organization."
      },
      {
        question: "Can my employer monitor my emails and online activity?",
        answer: "Yes, in most cases, employers can monitor work-related emails and internet usage, especially if you're using company devices. However, they must inform employees about their monitoring policies."
      },
      {
        question: "What are my rights if I’m wrongfully terminated?",
        answer: "If you believe you were fired unfairly, review your contract and labor laws. You may be able to file a wrongful termination claim and seek compensation or reinstatement."
      },
      {
        question: "Can my employer change my work schedule without notice?",
        answer: "This depends on local labor laws and your employment agreement. Some laws require advance notice for schedule changes, especially for hourly workers."
      },
      {
        question: "Am I entitled to paid sick leave?",
        answer: "Many countries and states mandate paid sick leave, but it depends on local laws and company policies. Check your contract and labor regulations to see if you qualify."
      },
      {
        question: "Can I refuse to work in unsafe conditions?",
        answer: "Yes. Employees have the right to refuse work in hazardous conditions that violate safety regulations. Report the issue to your employer and, if necessary, to the relevant labor authority"
      }
    ]

    function toggleIndex(index) {
      setOpenIndex(openIndex == index ? null : index)
    }

  return (

    <div>

      <section className="section-office-header">
        <div className="header-sub">
          <h1>Understanding Your Workplace Rights</h1>
            <p>
              Understanding your workplace rights is essential for ensuring fair treatment, equal opportunities, and a safe working environmen
            </p>
            <a href="/pages/Experts.jsx"><button className="office-cta">
              Contact an Expert
            </button></a>
        </div>
      </section>

      <section className="key-workspace-rights">
        <h1> Key Workplace Rights </h1>

       <div className="work-rights">
          {workRights.map((item, index) => (
              <div className="work_rights_content" key={index}>
                <h2 className="item-title">{item.title}</h2>
                <p className="item-description">{item.description}</p>
                <button className="item-btn">
                  <a href="/Experts">{item.button}</a>
                </button>
              </div>
          ))}
       </div>

      </section>

      <section className="faqWork-rights">

        <h2>What Our Users Ask</h2>
        {workFaq.map((faq, index) => (

          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleIndex(index)}>
              <h3>{faq.question}</h3>
              <span className="arrow">
                {openIndex === index ? "▼" : "►"}
              </span>
            </div>

            {openIndex === index && (
             <div className="faq-answer">{faq.answer}</div>
             )}

            {/* <div className="faq-answer">
                {openIndex === index ? faq.answer : null}
            </div> */}
          </div>

        ))}

      </section>

      <div className="cta-work">
        <p>Need further guidance or legal advice?</p>
        <button><a href="/Experts">Contact an Expert</a></button>
      </div>

    </div>
  )

}

export default WorkplaceRights;