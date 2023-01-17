import React,{useState} from "react";
import Headers from "./components/Headers";
import Feedbackitem from "./components/Feedbackitem";
import FeedbackData from './Data/FeedbackData'
import "./App.css";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <Headers />
      <div className="container">
      <Feedbackitem/>
      </div>
    </>
  );
}

export default App;
