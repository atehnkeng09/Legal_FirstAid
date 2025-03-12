import React, { useState, useEffect } from "react";
import "./Experts.css";

function Experts() {
  // Load questions from state
  const [questions, setQuestions] = useState([
    {
      id: 1,
      user: "John Doe",
      question: "What are my rights if I'm wrongfully arrested?",
      replies: 2,
      upvotes: 5,
      time: "2 hours ago",
    },
    {
      id: 2,
      user: "Jane Smith",
      question: "How do I handle a property dispute?",
      replies: 1,
      upvotes: 3,
      time: "1 day ago",
    },
  ]);

  const [newQuestion, setNewQuestion] = useState("");
  const [responses, setResponses] = useState(() => {
    // Load responses from local storage
    const savedResponses = localStorage.getItem("responses");
    return savedResponses ? JSON.parse(savedResponses) : {};
  });

  const [responseInputs, setResponseInputs] = useState({});
  const [userRole, setUserRole] = useState("User"); // Default user role

  useEffect(() => {
    localStorage.setItem("responses", JSON.stringify(responses));
  }, [responses]);

  // Function to post a new question
  const handlePostQuestion = () => {
    if (newQuestion.trim() !== "") {
      const newEntry = {
        id: Date.now(),
        user: "Anonymous", // Placeholder, could be dynamic
        question: newQuestion,
        replies: 0,
        upvotes: 0,
        time: "Just now",
      };
      setQuestions([newEntry, ...questions]);
      setNewQuestion("");
    }
  };

  // Function to post a response
  const handlePostResponse = (questionId) => {
    if (responseInputs[questionId]?.trim() !== "") {
      const newResponses = {
        ...responses,
        [questionId]: [
          ...(responses[questionId] || []),
          {
            user: userRole === "Legal Expert" ? "Expert" : "User",
            text: responseInputs[questionId],
          },
        ],
      };

      setResponses(newResponses);
      localStorage.setItem("responses", JSON.stringify(newResponses));

      setResponseInputs((prevInputs) => ({
        ...prevInputs,
        [questionId]: "",
      }));

      setQuestions((prevQuestions) =>
        prevQuestions.map((q) =>
          q.id === questionId ? { ...q, replies: q.replies + 1 } : q
        )
      );
    }
  };

  return (
    <div className="contact-experts">
      <h1>Contact Legal Experts</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for legal topics..."
        className="search-bar"
      />

      {/* Role Selector */}
      <div className="role-selector">
        <label>
          <input
            type="radio"
            name="role"
            value="User"
            checked={userRole === "User"}
            onChange={() => setUserRole("User")}
          />
          I am a User
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="Legal Expert"
            checked={userRole === "Legal Expert"}
            onChange={() => setUserRole("Legal Expert")}
          />
          I am a Legal Expert
        </label>
      </div>

      {/* Ask a Question */}
      <div className="ask-question">
        <textarea
          placeholder="Ask your legal question here..."
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        ></textarea>
        <button onClick={handlePostQuestion}>Post Question</button>
      </div>

      {/* Sorting Options */}
      <div className="sort-options">
        <button>Newest</button>
        <button>Most Upvoted</button>
        <button>Unanswered</button>
      </div>

      {/* Forum Questions */}
      <div className="forum">
        {questions.map((q) => (
          <div className="question" key={q.id}>
            <h3>{q.user}</h3>
            <p>{q.question}</p>
            <div className="question-meta">
              <span>{q.time}</span>
              <span>💬 {q.replies} Replies</span>
              <span>👍 {q.upvotes} Upvotes</span>
            </div>

            {/* Response Section */}
            <div className="response-section">
              {responses[q.id] && responses[q.id].length > 0 && (
                <div className="replies">
                  {responses[q.id].map((reply, index) => (
                    <div
                      key={index}
                      className={`reply ${
                        reply.user === "Expert" ? "expert-reply" : "user-reply"
                      }`}
                    >
                      <h4 className="reply-user">
                        {reply.user === "Expert"
                          ? "👨‍⚖️ Legal Expert"
                          : "👤 User"}
                      </h4>
                      <p>{reply.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Response Input */}
              <div className="reply-input">
                <textarea
                  placeholder="Write a response..."
                  value={responseInputs[q.id] || ""}
                  onChange={(e) =>
                    setResponseInputs({
                      ...responseInputs,
                      [q.id]: e.target.value,
                    })
                  }
                ></textarea>
                <button onClick={() => handlePostResponse(q.id)}>
                  Submit Response
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experts;
