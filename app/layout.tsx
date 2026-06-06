import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Webinar Attendance Predictor',
  description: 'Predict webinar attendance from registration data'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cdbd3a6e-447a-4ffe-8fb0-ca6246bd8cd3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
