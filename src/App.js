import React,{useState} from "react";
import Headers from "./components/Headers";
import Feedbacklist from "./components/Feedbacklist";
import FeedbackData from './Data/FeedbackData'
import "./App.css";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <Headers />
      <div className="container">
      <Feedbacklist feedback = {feedback} />
      </div>
    </>
  );
}

export default App;
