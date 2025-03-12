import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import ErrorBoundary from '@/components/common/ErrorBoundary'
import { PaintingsProvider } from '@/lib/context/PaintingsContext'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Gicheva Art - Fine Art Gallery',
  description: 'Explore and purchase original paintings by Gicheva',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <ErrorBoundary>
          <PaintingsProvider>
            <main className="min-h-screen">
              {children}
            </main>
          </PaintingsProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}