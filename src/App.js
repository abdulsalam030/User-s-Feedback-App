import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headers from "./components/Headers";
import Feedbacklist from "./components/Feedbacklist";
import FeedbackStats from "./components/FeedbackStats";
import { FeedbackProvider } from "./context/FeedbackContext";
import Form from "./components/Form";
import About from "./Pages/About";
import AboutIcon from "./components/AboutIcon";
import "./App.css";
function App() {
  return (
    <FeedbackProvider>
    <Router>
      <Headers />
      <div className="container">
        <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Form  />
              <FeedbackStats />
              <Feedbacklist  />
            </div>
          }
        ></Route>
        <Route path="/About" element={<About />} />
        </Routes>
        <AboutIcon/>
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
