import type {CtaItem} from "../contracts/ctaItem.type.ts";

export const URL = 'https://day.awscommunity.org.bo'

export const CTA: CtaItem[] = [
  {
    label: 'Call for Speakers',
    description: '¿Eres experto o experta en AWS, tienes una historia que contar o una solución para compartir?',
    url: 'https://tally.so/r/nWgO9Phttps://tally.so/r/nWgO9P',
    variant: 'outlined',
    descriptionWeight: 'normal'
  },
  {
    label: 'Hazte Sponsor',
    description: '¡Posiciona tu empresa o marca ante la comunidad cloud en el evento mas grande de Bolivia!',
    url: 'https://tally.so/r/nGXXOp',
    variant: 'contained',
    descriptionWeight: 'bold'
  },
  {
    label: 'Ver AWS CD 2024',
    description: 'Mira todo lo que vivimos el año pasado en el primer AWS Community Day Bolivia',
    url: 'https://2024.awscommunity.org.bo/',
    variant: 'outlined',
    descriptionWeight: 'normal'
  }
];
