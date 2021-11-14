import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const sprintsDirectory = path.join(process.cwd(), 'sprints');

interface DataObject {
  [key: string]: any;
}

interface MatterData {
  content: string;
  data: DataObject;
  isEmpty?: boolean;
  excerpt?: string;

}

export async function getSortedSprintsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(sprintsDirectory);
  const allSprintsData: any = await Promise.all(fileNames.map(async (fileName)  => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(sprintsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult: MatterData = matter(fileContents);

      // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);

    const content = processedContent.toString();

    // Combine the data with the id
    return {
      id,
      content, 
      ...matterResult.data
    }
  }));
  // Sort posts by date
  return allSprintsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}
