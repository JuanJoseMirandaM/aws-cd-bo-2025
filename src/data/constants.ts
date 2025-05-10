import type { CtaItem } from "../contracts/cta.type.ts";
import type { CardItem } from "../contracts/card.type.ts";
import card1 from '../images/assets/card-1.jpg'
import card2 from '../images/assets/card-2.jpg'
import card3 from '../images/assets/card-3.jpg'
import card4 from '../images/assets/card-4.jpg'

export const URL = 'https://day.awscommunity.org.bo'

export const CTAS: CtaItem[] = [
  {
    label: 'Call for Speakers',
    description: '¿Eres experto o experta en AWS, tienes una historia que contar o una solución para compartir?',
    url: 'https://tally.so/r/nWgO9P',
    variant: 'outlined',
    descriptionWeight: 'normal'
  },
  {
    label: 'Hazte Sponsor',
    description: '¡Posiciona tu empresa o marca ante la comunidad cloud en el evento mas grande de Bolivia!',
    url: 'https://tally.so/r/nWgO9P',
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

export const CARDS: CardItem[] = [
  {
    title: 'Conoce a los líderes del futuro',
    description: 'El AWS Community Day te trae charlas, talleres y demostraciones exclusivas, impartidas por expertos de AWS y referentes de la industria en Latinoamérica. Vive experiencias únicas, explora casos de éxito reales y descubre las soluciones más innovadoras que están redefiniendo el panorama digital de hoy.',
    imgSrc: card1,
    position: 'left'
  },
  {
    title: 'Conexiones que trascienden',
    description: 'El AWS Community Day es la oportunidad perfecta para conectar con profesionales afines, intercambiar experiencias, y abordar juntos los desafíos más relevantes. Saldrás no solo con nuevos aprendizajes, sino con contactos clave que podrían transformar tu futuro profesional.',
    imgSrc: card2,
    position: 'right'
  },
  {
    title: 'Un entorno para crecer',
    description: 'En AWS Community Day estarás en un ambiente donde se siente la energía de un espacio diseñado para colaborar, crear y soñar en grande. Tendremos areas especializadas donde podras conectarte con referentes de la industria.',
    imgSrc: card3,
    position: 'left'
  },
  {
    title: 'Siempre a la vanguardia',
    description: 'En AWS Community Day estarás al tanto de las últimas tendencias y avances del ecosistema AWS. Este evento te coloca en el epicentro de la innovación, preparándote para enfrentar los retos del mañana y aprovechar las oportunidades que surgen en el acelerado mundo de la nube.',
    imgSrc: card4,
    position: 'right'
  }
]
