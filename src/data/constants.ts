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
    description: '¡Posiciona tu empresa o marca ante la comunidad en el evento cloud mas grande de Bolivia!',
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
    title: 'Inspírate con Expertos en la nube de AWS',
    description: 'En el AWS Community Day Bolivia 2025 conoce y escucha a expertos locales e internacionales que están liderando la transformación digital en la región. Aprende de sus experiencias, descubre sus estrategias y únete a la comunidad de líderes cloud del futuro.',
    imgSrc: card1,
    position: 'left'
  },
  {
    title: 'Networking que Abre Puertas',
    description: 'Amplía tu red de contactos con profesionales, líderes de la industria y expertos en cloud computing. Comparte ideas, colabora en proyectos y encuentra las conexiones que te ayudarán a crecer profesionalmente.',
    imgSrc: card2,
    position: 'right'
  },
  {
    title: 'Prepárate para el Futuro de la Nube',
    description: 'Descubre las últimas tendencias, avances y mejores prácticas en el ecosistema cloud. Este evento te equipa con el conocimiento y las habilidades que necesitas para enfrentar los desafíos del mañana y aprovechar las oportunidades que ofrece la nube de AWS.',
    imgSrc: card3,
    position: 'left'
  },
  {
    title: 'Descubre Soluciones que Transforman',
    description: 'El AWS Community Day Bolivia 2025 es evento te conecta con expertos y casos de éxito reales en Bolivia, Latinoamérica y el mundo. Aprende cómo la nube está impulsando la innovación en empresas como la tuya y descubre las herramientas para llevar tu negocio al siguiente nivel.',
    imgSrc: card4,
    position: 'right'
  }
]
