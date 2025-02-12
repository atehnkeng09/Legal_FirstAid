import React from "react";
import './ArrestRights.css';

function ArrestRights() {
  return (
    <section className="arrest-rights">
      <div className="arrest-header">
        <h1>Know Your Arrest Rights</h1>
        <p>
          Being arrested can be stressful, but knowing your rights can help you stay safe and protect yourself legally.
        </p>
      </div>

      <div className="key-rights">
        <h2>Your Rights During an Arrest</h2>
        <div className="right-item">
          <h3>1. Right to Remain Silent</h3>
          <p>
            You are not required to answer questions from the police, except to provide your name and address in certain situations. Anything you say can be used against you in court.
          </p>
        </div>
        <div className="right-item">
          <h3>2. Right to an Attorney</h3>
          <p>
            You have the right to speak to a lawyer before answering any questions. If you cannot afford one, a lawyer will be provided for you.
          </p>
        </div>
        <div className="right-item">
          <h3>3. Right to Know the Charges</h3>
          <p>
            You must be informed of the reason for your arrest and the charges against you.
          </p>
        </div>
      </div>

      <div className="what-to-do">
        <h2>What to Do During an Arrest</h2>
        <ul>
          <li>Stay calm and be polite to the police.</li>
          <li>Do not resist arrest, even if you believe it is unfair.</li>
          <li>Clearly state that you wish to remain silent and ask for a lawyer.</li>
        </ul>
      </div>

      <div className="what-not-to-do">
        <h2>What Not to Do</h2>
        <ul>
          <li>Do not discuss your case or explain yourself without a lawyer present.</li>
          <li>Do not run or physically resist the police.</li>
          <li>Do not lie to the police, as this can be used against you.</li>
        </ul>
      </div>

      <div className="faq">
        <h2>Frequently Asked Questions</h2>

      <div className="faq-item">
        <h4>Can the police search my belongings?</h4>
        <p>
          Police may only search you or your belongings with your consent, a warrant, or if there is probable cause. If you do not agree to a search, clearly state, "I do not consent to this search."
        </p>
      </div>

      <div className="faq-item">
        <h4>What should I do if I believe my rights were violated?</h4>
        <p>
          Document the events as soon as possible, including the officers' badge numbers, names, and patrol car numbers. Collect witness statements, and contact a lawyer to discuss your options.
        </p>
      </div>

      <div className="faq-item">
        <h4>Do I have to answer all the police's questions?</h4>
        <p>
          No. You have the right to remain silent. You are only required to provide your name and identification in certain situations, depending on local laws. It’s best to say, "I am invoking my right to remain silent," if you do not wish to speak further.
        </p>
      </div>

      <div className="faq-item">
        <h4>What happens if I cannot afford a lawyer?</h4>
        <p>
          If you cannot afford a lawyer, the court will appoint one to represent you at no cost. You should clearly state that you want a lawyer before answering any questions.
        </p>
      </div>

      <div className="faq-item">
        <h4>Can I record the police during an arrest?</h4>
        <p>
          Yes, in most jurisdictions, you are legally allowed to record the police in public as long as you do not interfere with their duties. Be respectful, and make sure not to obstruct their actions while recording.
        </p>
      </div>

      <div className="faq-item">
        <h4>What should I do if I am arrested for something I didn’t do?</h4>
        <p>
          Stay calm and do not resist arrest. Clearly state that you are innocent, but avoid providing any detailed statements without a lawyer present. Your lawyer will help you present your case in court.
        </p>
      </div>

      <div className="faq-item">
        <h4>Can the police arrest me without a warrant?</h4>
        <p>
          Yes, the police can arrest you without a warrant if they have probable cause to believe that you committed a crime or if they witness a crime occurring. However, they must still inform you of the reason for your arrest.
        </p>
      </div>

      <div className="faq-item">
        <h4>What are my rights if I am stopped while driving?</h4>
        <p>
          If you are pulled over, you must provide your driver's license, vehicle registration, and proof of insurance. You can politely ask why you were stopped and are not required to answer additional questions. If asked to step out of the vehicle, comply but remain silent.
        </p>
      </div>

      </div>

      <div className="cta">
        <p>Need further guidance or legal advice?</p>
        <button><a href="/Experts">Contact an Expert</a></button>
      </div>
    </section>
  );
}

export default ArrestRights;
