import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Про мене — Аліна Татару | Юрист без кордонів',
  description: 'Аліна Татару — практикуючий юрист у Празі з двома дипломами (право та психологія). Понад 3 роки допомагає українцям та іноземцям з юридичними питаннями у Чехії.',
  alternates: {
    canonical: 'https://uristbezkordoniv.cz/about',
  },
  openGraph: {
    title: 'Про мене — Аліна Татару | Юрист без кордонів',
    description: 'Дізнайтесь більше про Аліну Татару — юриста з Праги з освітою в галузі права та психології.',
    url: 'https://uristbezkordoniv.cz/about',
    images: [{ url: '/alina-4.jpg', width: 1200, height: 630, alt: 'Аліна Татару — Юрист без кордонів' }],
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
