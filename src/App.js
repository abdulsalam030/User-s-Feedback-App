import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headers from "./components/Headers";
import Feedbacklist from "./components/Feedbacklist";
import FeedbackData from "./Data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import Form from "./components/Form";
import About from "./Pages/About";
import AboutIcon from "./components/AboutIcon";
import "./App.css";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Headers />
      <div className="container">
        <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Form handleAdd={addFeedback} />
              <FeedbackStats feedback={feedback} />
              <Feedbacklist feedback={feedback} handleDelete={deleteFeedback} />
            </div>
          }
        ></Route>
        <Route path="/About" element={<About />} />
        </Routes>
        <AboutIcon/>
      </div>
    </Router>
  );
}

export default App;
