import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Headers from "./components/Headers";
import Feedbacklist from "./components/Feedbacklist";
import FeedbackData from "./Data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import Form from "./components/Form";
import "./App.css";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);


  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
     setFeedback([newFeedback, ...feedback])
    console.log(newFeedback)
  }

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item)=> item.id !== id ))
  };

  return (
    <>
      <Headers />
      <div className="container">
        <Form handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
        <Feedbacklist feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
