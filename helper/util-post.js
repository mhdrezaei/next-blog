import path from "path";
import fs from "fs";
import matter from "gray-matter";
export function createPath() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  return filePath;
}

export function getData() {
  const filePath = createPath();
  const fileData = fs.readFileSync(filePath);
  const posts = JSON.parse(fileData);
  return posts;
}

const pathDirectori = path.join(process.cwd(), "content");

function getPostData(fileName) {
  const pathFile = path.join(pathDirectori, fileName);
  const fileContent = fs.readFileSync(pathFile);
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/, "");
  const newPostData = {
    slug: postSlug,
    ...data,
    content,
  };
  return newPostData;
}

export function getAllPost() {
  const fileNames = fs.readdirSync(pathDirectori);
  const allPosts = fileNames.map((fileName) => {
    return getPostData(fileName);
  });

  const sortedPost = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPost;
}

export function getFeaturedPost() {
  const allPosts = getAllPost();
  const featured = allPosts.filter((post) => post.isFeatured);

  return featured;
}
