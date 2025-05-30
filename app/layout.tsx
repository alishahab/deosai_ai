import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Deosai MedTech',
  description: 'Deosai MedTech presents Sensai, a revolutionary AI-powered platform designed to enhance healthcare delivery and patient outcomes. Our mission is to empower healthcare professionals with cutting-edge technology that streamlines processes, improves diagnostics, and fosters better patient engagement.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
