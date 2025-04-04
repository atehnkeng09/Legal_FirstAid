import { useState, useEffect } from "react"; 
import "./Experts.css";
import { RiDeleteBin6Fill } from "react-icons/ri";

function Experts() {
  const [searchQuery, setSearchQuery] = useState("");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState(""); // Title
  const [description, setDescription] = useState(""); // Description
  const [selectedImage, setSelectedImage] = useState(null); // Image
  const [errorMessage, setErrorMessage] = useState(""); // Error message state
  const [isSubmitting, setIsSubmitting] = useState(false); // Submit state
  const [suggestions, setSuggestions] = useState({}); // Suggestions per question
  const [suggestionInputs, setSuggestionInputs] = useState({}); // Inputs per question

  useEffect(() => {
    getAllSituations();
  }, []);

  // Fetch all posted situations
  async function getAllSituations() {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("https://rrn24.techchantier.com/Legal_First_Aid/public/api/situations", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          ...(token ? { "Authorization": `Bearer ${token}` } : {})
        },
      });

      const result = await response.json();
      // console.log(result)

      if (response.ok) {
        if (Array.isArray(result.data)) {
          setQuestions(result.data);
        } else if (Array.isArray(result)) {
          setQuestions(result);
        } else {
          console.error("Unexpected response format:", result);
          setQuestions([]);
        }
      } else {
        console.error("Error fetching situations:", result);
      }
    } catch (err) {
      console.error("Error fetching situations:", err);
    }
  }

  const handlePostQuestion = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    const token = localStorage.getItem("token");
    if (!token) {
      setErrorMessage("You must be logged in to post a question.");
      setIsSubmitting(false);
      return;
    }

    const trimmedTitle = newQuestion.trim();
    const trimmedDescription = description.trim();

    if (!trimmedTitle) {
      setErrorMessage("Title cannot be empty.");
      setIsSubmitting(false);
      return;
    }
    if (!trimmedDescription) {
      setErrorMessage("Description cannot be empty.");
      setIsSubmitting(false);
      return;
    }

    try {
      if (selectedImage) {
        const formData = new FormData();
        formData.append("title", trimmedTitle);
        formData.append("description", trimmedDescription);
        formData.append("is_sensitive", "0");
        formData.append("image", selectedImage);

        const response = await fetch("https://rrn24.techchantier.com/Legal_First_Aid/public/api/situations", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
          },
          body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
          console.error("Full API Response:", data);
          setErrorMessage(`Error: ${data.message || "Unknown error"}`);
          setIsSubmitting(false);
          return;
        }

        handleSuccess(data);
      } else {
        const response = await fetch("https://rrn24.techchantier.com/Legal_First_Aid/public/api/situations", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: trimmedTitle,
            description: trimmedDescription,
            is_sensitive: 0,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          console.error("Full API Response:", data);
          setErrorMessage(`Error: ${data.message || "Unknown error"}`);
          setIsSubmitting(false);
          return;
        }

        handleSuccess(data);
      }
    } catch (error) {
      console.error("Error posting situation:", error);
      setErrorMessage(`Error: ${error.message}`);
      setIsSubmitting(false);
    }
  };

  const handleSuccess = () => {
    // alert("Situation posted successfully!");
    // console.log("Situation posted:", data);
    getAllSituations();
    setNewQuestion("");
    setDescription("");
    setSelectedImage(null);
    setIsSubmitting(false);
  };

  const handleSuggestionSubmit = async (questionId, answer) => {
    const input = suggestionInputs[questionId]?.trim();
    if (!input) return;

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to submit a suggestion.");
      return;
    }

    try {
      const formData = new FormData();
      // formData.append("title", input);
      // formData.append("description", "Generated description");
      // formData.append("is_sensitive", "1");
      formData.append("answer", answer);
      formData.append("legal_system", "common_law");
      // formData.append("image", new Blob()); // Dummy image blob

      const response = await fetch(`https://rrn24.techchantier.com/Legal_First_Aid/public/api/situations/${questionId}/suggestions`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: formData,
      });

      const result = await response.json();
      // console.log(result);

      if (response.ok) {
        alert("Suggestion updated successfully.");
        const updatedSuggestions = {
          ...suggestions,
          [questionId]: [...(suggestions[questionId] || []), input],
        };
        setSuggestions(updatedSuggestions);
        setSuggestionInputs(prev => ({ ...prev, [questionId]: "" }));
      } else {
        console.error("Suggestion update failed:", result);
        alert(result.message || "Failed to update suggestion.");
      }
    } catch (error) {
      console.error("Error submitting suggestion:", error);
      alert("An error occurred while submitting your suggestion.");
    }
  };

  const filteredQuestions = questions.filter(
    q => q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
         q.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteSituation = async (situationId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to submit a suggestion.");
      return;
    }
    const response = await fetch(`https://rrn24.techchantier.com/Legal_First_Aid/public/api/situations/${situationId}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });

    handleSuccess()
    await response.json();


    // if (response.ok) {
    //   alert("Suggestion updated successfully.");
    // }
  }

  return (
    <div className="contact-experts">
      <h1>Contact Legal Experts</h1>
      <input 
        type="text" 
        placeholder="Search for legal topics..." 
        className="search-bar" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />

      <div className="ask-question">
        <textarea 
          placeholder="Enter your question title..." 
          value={newQuestion} 
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <textarea 
          placeholder="Describe your legal question..." 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />

        <input 
          type="file" 
          name="image" 
          accept="image/*" 
          onChange={(e) => setSelectedImage(e.target.files[0])} 
          key={selectedImage ? selectedImage.name : ''} 
        />

        <button onClick={handlePostQuestion} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Post Question"}
        </button>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="forum">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q) => (
            <div className="question" key={q.id}>
              <div style={{display: "flex", justifyContent: 'space-between'}}>
              <h3>{q.title}</h3>
              <span onClick={() => handleDeleteSituation(q.id)} style={{color: 'red'}}>

              <RiDeleteBin6Fill />
              </span>
              </div>
              <p>{q.description}</p>
              <div className="question-meta">
                <span>{q.created_at}</span>
                <span>💬 {q.replies || 0} Replies</span>
                <span>👍 {q.upvotes || 0} Upvotes</span>
              </div>
              {q.image && (
                // <img 
                //   src={`https://rrn24.techchantier.com/Legal_First_Aid/public${q.image}`} 
                //   alt={q.title} 
                //   onError={(e) => { e.target.style.display = 'none'; }} 
                // />
                <img 
                style={{width: '100%', height: '500px', objectFit: 'cover'}}
                  src={`${q.image}`} 
                  alt={q.title} 
                  onError={(e) => { e.target.style.display = 'none'; }} 
                />
              )}

              <div className="suggestion-section">
                <input
                  type="text"
                  placeholder="Write a suggestion or legal advice..."
                  value={suggestionInputs[q.id] || ""}
                  onChange={(e) =>
                    setSuggestionInputs({ ...suggestionInputs, [q.id]: e.target.value })
                  }
                />
                <button onClick={() => handleSuggestionSubmit(q.id, suggestionInputs[q.id] )}>
                  Submit Suggestion
                </button>

                {suggestions[q.id] && suggestions[q.id].length > 0 && (
                  <div className="suggestions-list">
                    <h4>Suggestions:</h4>
                    <ul>
                      {suggestions[q.id].map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No matching questions found.</p>
        )}
      </div>
    </div>
  );
}

export default Experts;