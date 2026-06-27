import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'Аліна Татару — Юрист за кордоном | Прага, Чехія',
  description: 'Юридична допомога та оформлення документів у Чехії. Візи, робочі карти, паспорти, працевлаштування. Аліна Татару — практикуючий юрист у Празі.',
  keywords: 'юрист Прага, документи Чехія, робоча карта, віза Чехія, закордонний паспорт, працевлаштування Чехія',
  openGraph: {
    title: 'Аліна Татару — Юрист за кордоном',
    description: 'Юридична допомога та оформлення документів у Чехії. Прага.',
    locale: 'uk_UA',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-navy-900 text-white antialiased overflow-x-hidden">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
