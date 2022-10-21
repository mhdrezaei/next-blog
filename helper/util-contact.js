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
