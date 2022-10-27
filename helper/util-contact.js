import path from "path";
import fs from "fs";
import { createPath } from "./util-post";

export function saveMessage(contactData) {
  const filepath = createPath("message.json");
  console.log(filepath);
  const fileData = fs.readFileSync(filepath);
  const jsonData = JSON.parse(fileData);
  jsonData.push(contactData);
  fs.writeFileSync(filepath, JSON.stringify(jsonData));
  return { message: "success" };
}

export function saveFeedback(feedbackData) {
  const filepath = createPath("feedback.json");
  const fileData = fs.readFileSync(filepath);
  const jsonData = JSON.parse(fileData);
  jsonData.push(feedbackData);
  fs.writeFileSync(filepath, JSON.stringify(jsonData));
  return { message: "success" };
}

export function showFeedback(slug){
  const filepath = createPath("feedback.json");
  const fileData = fs.readFileSync(filepath);
  const feedbacks = JSON.parse(fileData);
  const filterFeedback = feedbacks.filter(feedback => feedback.slug === slug )
  return {feedbacks : filterFeedback }
}