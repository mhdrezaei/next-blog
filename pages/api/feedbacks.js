import { saveFeedback, showFeedback } from "../../helper/util-contact";

export default function handler(req , res){

    if (req.method === "POST") {
        const { slug , email, name, message } = req.body;
    
        if (
          !email ||
          !email.includes("@") ||
          !name ||
          name.trim() === "" ||
          !message ||
          message.trim() === ""
        ) {
          res.status(422).json({ message: "Invalid input." });
          return;
        }
    
        const newContactDetail = {
          id: new Date().toISOString(),
          slug,
          name,
          email,
          message,
        };
        const sendMessage = saveFeedback(newContactDetail);
        if (sendMessage.message === "success") {
          res.status(200).json({ message: "your feedback successfully sent!" });
        } else {
          res.status(500).json({ message: "something went wrong!" });
        }
      }else{
        const feedbacks = showFeedback();
        res.status(200).json({ feedbacks : feedbacks.feedbacks})
      }
    }
