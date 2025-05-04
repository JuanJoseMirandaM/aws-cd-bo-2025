import type {CardPosition} from "./commons.type.ts";

export interface CardItem {
  title: string
  description: string
  imgSrc: ImageMetadata
  position: CardPosition
}
