import { saveMessage } from "../../helper/util-contact";

export default function contactHandler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

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
      name,
      email,
      message,
    };
    const sendMessage = saveMessage(newContactDetail);
    if (sendMessage.message === "success") {
      res.status(200).json({ message: "your message successfully sent!" });
    } else {
      res.status(500).json({ message: "something went wrong!" });
    }
  }
}
