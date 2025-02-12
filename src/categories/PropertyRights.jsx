import React, { useState } from "react";
import "./PropertyRights.css"

function PropertyRights() {

  const [openIndex, setOpenIndex] = useState(null);
  function toggleIndex(index) {
    setOpenIndex(openIndex === null ? index : null)
  }

 const keyPropRights = [
  {
    title: "Ownership Rights– What does it mean to legally own property",
    description: "Owning property means having legal control and rights over it, including the ability to use, sell, lease, or transfer ownership. Legal ownership is typically established through titles, deeds, or other legal documents, which must be properly registered to avoid disputes."
  },
  {
    title: "Tenant Rights – Protections for tenants, eviction laws, and lease agreements",
    description: "Tenants have rights that protect them from unlawful eviction, unfair rent increases, and unsafe living conditions. These rights include security of tenure, privacy, and the ability to challenge unfair treatment by landlords. Lease agreements must outline terms, obligations, and dispute resolution procedures."
  },
  {
    title: "Landlord Responsibilities – Rights and obligations of landlords",
    description: "Landlords must provide safe, habitable living conditions, comply with local rental laws, and follow proper eviction procedures. They also have the right to collect rent, inspect the property under legal conditions, and enforce lease agreements while respecting tenant rights."
  },
  {
    title: "Buying & Selling Property – Legal procedures, contracts, and documentation",
    description: "Property transactions involve contracts, legal paperwork, and financial transactions to transfer ownership. Buyers should conduct due diligence, title searches, and inspections, while sellers must ensure clear ownership and proper disclosures. A real estate lawyer is often necessary to finalize agreements legally"
  },
  {
    title: "Property Disputes – How to handle disputes over land or property",
    description: "Disputes over property can arise from boundary issues, co-ownership disagreements, inheritance conflicts, or fraudulent sales. Legal solutions include mediation, arbitration, or court proceedings. Ensuring proper documentation and legal ownership records helps prevent conflicts."
  },
  {
    title: "Inheritance & Wills – Laws around property inheritance.",
    description: "When a property owner passes away, inheritance laws and wills determine how assets are distributed. A valid will ensures property goes to intended beneficiaries, while intestacy laws apply when no will exists. Legal disputes can arise if ownership is unclear or contested."
  },
  {
    title: " Property Taxes & Fees – Understanding property-related taxes and obligations.",
    description: "Property owners must pay annual property taxes, which fund public services. Additional costs may include transfer taxes, registration fees, and maintenance costs. Failure to pay taxes can result in fines, property liens, or legal action."
  },
  {
    title: "Zoning & Land Use Laws – Regulations on how property can be used.",
    description: "Governments regulate land use through zoning laws, which determine whether an area is for residential, commercial, or industrial use. Violating zoning laws can lead to fines, demolition orders, or restrictions on property modifications."
  },
  {
    title: " Homeowner Associations (HOAs) & Community Rules – Understanding HOA rules and regulations.",
    description: "Many residential areas have homeowner associations (HOAs) that set rules on property modifications, shared facilities, and maintenance fees. Failure to comply can result in penalties or legal disputes. Before buying a property in an HOA-governed area, it's crucial to review its rules."
  },
  {
    title: "Squatter Rights & Adverse Possession – When does illegal occupation become legal?",
    description: "In some cases, individuals occupying a property without legal ownership may gain rights through adverse possession if they meet certain conditions, such as long-term continuous occupancy without objection from the owner. Squatter laws vary by jurisdiction, and legal owners must take action to protect their property from unauthorized claims."
  },
 ]

const propertyFaq = [
  {
    question: "What should I do if my landlord refuses to make repairs",
    typo: "If your landlord refuses to make necessary repairs, you should:",
    answer: "Notify them in writing about the issue and request repairs.Check if local laws allow you to withhold rent or pay for repairs and deduct the cost.Contact local housing authorities or file a legal complaint if they still refuse."
  },
  {
    question: "Can I be evicted without notice",
    typo: "No, in most cases, eviction must follow legal procedures. Your landlord must:",
    answer: "Provide written notice before eviction.Obtain a court order if you refuse to leave.Allow time for you to challenge the eviction in court if necessary.Only under extreme cases (such as criminal activity) can immediate eviction occur."
  },
  {
    question: "How do I verify land ownership before buying",
    typo: "To confirm legal ownership of a property:",
    answer: "Check land registry records or request a title deed.Verify that the seller has legal authority to sell.Conduct a property survey to ensure there are no disputes.Work with a real estate lawyer to review the documentation."
  },
  {
    question: "What happens if a will does not mention a property",
    typo: "If a will does not explicitly mention a property, it may:",
    answer: "Be distributed according to inheritance laws in your country.Become part of the estate, and a court may decide its rightful heirs.Require family members to file a claim if they believe they are entitled to it."
  },
  {
    question: "How do I handle property disputes in court",
    typo: "To resolve property disputes legally:",
    answer: "Try negotiation or mediation first.Gather all relevant documents (title deeds, contracts, agreements).File a legal complaint in court if no agreement is reached.Follow the court’s ruling, which may include compensation or property transfer."
  },
  {
    question: "Can a landlord increase rent anytime",
    typo: "No, a landlord must follow legal procedures when increasing rent:",
    answer: "Provide notice in advance, usually 30–90 days, depending on the law.Ensure the increase is reasonable and follows local rent control regulations.Tenants can challenge an unfair rent increase through housing authorities or legal action."
  },
  {
    question: "What are my rights if I inherit a disputed property",
    typo: "If you inherit a property under dispute:",
    answer: "Verify your legal ownership through wills, inheritance laws, and court rulings.Negotiate with other claimants to settle the dispute peacefully.Seek a court judgment if there are multiple conflicting claims."
  },
  {
    question: "Can I build anything I want on my land",
    typo: "Not always. Construction is subject to:",
    answer: "Zoning laws that regulate land use (residential, commercial, etc.).Building permits and environmental regulations.Homeowner association rules (if applicable).Violations can lead to fines, demolition, or legal action."
  },
  {
    question: "What should I do if someone is squatting on my property?",
    typo: "If squatters occupy your land:",
    answer: "Do not engage in illegal eviction (self-help eviction).File a formal complaint with law enforcement.Seek a court order for eviction.Act quickly—some laws allow squatters to claim ownership over time (adverse possession)."
  },
  {
    question: "Can I be forced to sell my property?",
    typo: "Yes, but only under specific conditions:",
    answer: "Through eminent domain, where the government acquires land for public use (with compensation).If you default on mortgage payments, leading to foreclosure.In co-ownership disputes, a court may force a sale if owners disagree."
  },
  
]

  return (
    <div>
      <section className="property-header">
        <h1>Understand Your Property Rights</h1>
        <p>
           Property rights are essential because they establish legal ownership and protection over land, homes, and other assets. They ensure that individuals can buy, sell, inherit, and use property without unfair interference
        </p>
      </section>

      <section className="section_key_rights">
        <h2>Key Property Rights and Their Descriptions</h2>

        <div className="property-rights" >
          {keyPropRights.map((property, index) => (      

              <div className="key-rights" key={index}>
                <h3>{property.title}</h3>
                <p>{property.description}</p>
              </div>
           
        ))}
      </div>
     
      </section>

      <section className="faq-property">
        <h2>What Our Users Ask Us</h2>
        {propertyFaq.map((item, index) => (

          <div className="faq-item" key={index}>

            <div className="faq-question" onClick={() => toggleIndex(index)}>
              {item.question}
              <span className="arrow">{openIndex === index ? "▼" : "►"}</span>
            </div>
            
            {openIndex === index && (
              <div className="faq-answer">
                {item.typo}
                <li>{item.answer}</li>
              </div>
            )}

          </div>

        ))}
      </section>

      <div className="cta-work">
        <p>Need further guidance or legal advice?</p>
        <button><a href="/Experts">Contact an Exper</a></button>
      </div>

    </div>
  )
}

export default PropertyRights;