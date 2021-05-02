import { IGatsbyImageData } from "gatsby-plugin-image"
import { FileNode, IGatsbyImageDataParent } from "gatsby-plugin-image/dist/src/components/hooks"

export type ImageDataLike = FileNode | IGatsbyImageDataParent | IGatsbyImageData
export interface Route {
  name: string
  route: string
}
