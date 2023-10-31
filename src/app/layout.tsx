import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { StyleProvider, ThemePicker } from 'vcc-ui';
import { Header } from '@/components/header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Volvo Cars Challenger',
  description: 'Volvo Cars Front-end Challenger',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyleProvider>
          <ThemePicker variant="light">
            <Header />
            {children}
          </ThemePicker>
        </StyleProvider>
      </body>
    </html>
  );
}
