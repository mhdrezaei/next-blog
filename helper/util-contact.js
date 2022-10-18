import path from "path";
import fs from "fs";
import { createPath } from "./util-post";


export function saveMessage(data){
    const filepath = createPath('message.json');
    const fileData = fs.readFileSync(filepath);

}