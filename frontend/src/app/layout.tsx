import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <body>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}