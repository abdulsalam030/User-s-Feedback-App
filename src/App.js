import React, { useState } from "react";
import Headers from "./components/Headers";
import Feedbacklist from "./components/Feedbacklist";
import FeedbackData from "./Data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import "./App.css";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item)=> item.id !== id ))
  };

  return (
    <>
      <Headers />
      <div className="container">
      <FeedbackStats feedback={feedback} />
        <Feedbacklist feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
