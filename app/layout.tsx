import type { Metadata } from 'next';
import { Providers } from './store/provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Small business money keeper',
  description: 'Small business money keeper',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
