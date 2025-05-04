import type {ButtonVariant, FontWeight} from "./commons.type.ts";

export interface CtaItem {
  label: string
  description: string
  url: string
  variant: ButtonVariant
  descriptionWeight: FontWeight
}
