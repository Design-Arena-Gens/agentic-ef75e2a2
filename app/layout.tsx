import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Development Showcase | Futuristic Presentation',
  description: 'A cinematic presentation showcasing my music player project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
