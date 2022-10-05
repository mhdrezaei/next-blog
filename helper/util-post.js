import path from 'path';
import fs from 'fs';

export function createPath(){
    const filePath = path.join(process.cwd(),'data','data.json');
    return filePath;
}

export function getData(){
    const filePath = createPath()
    const fileData = fs.readFileSync(filePath);
    const posts = JSON.parse(fileData)
    return posts
}