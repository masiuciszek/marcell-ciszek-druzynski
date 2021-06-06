import { IGatsbyImageData } from "gatsby-plugin-image"
import { FileNode, IGatsbyImageDataParent } from "gatsby-plugin-image/dist/src/components/hooks"

export type ImageDataLike = FileNode | IGatsbyImageDataParent | IGatsbyImageData
export interface Route {
  name: string
  route: string
}

export interface ContactType {
  id: string
  name: string
  path: string
}

export interface Frontmatter {
  date?: string
  length?: string
  spoiler?: string
  tags?: Array<string>
  title?: string
}

export interface NodeType {
  id: string
  slug: string
  frontmatter: Frontmatter
}

export interface Node {
  node: {
    id: string
    slug: string
    frontmatter: {
      date: string
      length: string
      spoiler: string
      tags: Array<string>
      title: string
    }
  }
}
