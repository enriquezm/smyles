import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const sprintsDirectory = path.join(process.cwd(), 'sprints')

interface DataObject {
  [key: string]: any;
}

interface MatterData {
  content: string;
  data: DataObject;
  isEmpty?: boolean;
  excerpt?: string;

}

export function getSortedSprintsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(sprintsDirectory)
  const allSprintsData: any = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(sprintsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult: MatterData = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
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