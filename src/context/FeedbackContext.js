import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is ReactJs",
      rating: 1,
    },
    {
        id: 2,
        text: "This is AngularJs",
        rating: 2,
      },
      {
        id: 3,
        text: "This is VueJs",
        rating: 3,
      }
  ]);

  const [feedbackEdit,setFeedbackEdit] = useState({
    item : {},
    edit : false
})

// set item to be updated
const editFeedback = (item) => {
    setFeedbackEdit({
        item,
        edit: true
    })
}

// update feedbackitem
const updateFeedback = (id,updItem) => {
    setFeedback(feedback.map((item)=> item.id === id ? {...item, ... updItem } : item ))
}

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };

  return (
    <FeedbackContext.Provider value={{feedback,deleteFeedback,addFeedback,editFeedback,feedbackEdit,updateFeedback}}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
