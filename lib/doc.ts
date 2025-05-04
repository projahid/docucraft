import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'docs');


export function getDocuments(){
    console.log(postsDirectory);
    const fileNames = fs.readdirSync(postsDirectory);

    const allDocuments = fileNames.map(fileNames =>{
        const id = fileNames.replace(".md", "")

        const fullPath = path.join(postsDirectory, fileNames);

        const fileContents = fs.readFileSync(fullPath, "utf-8")

        const matterResult = matter(fileContents);
    })


}
