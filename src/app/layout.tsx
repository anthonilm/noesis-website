import './globals.css';
import type { Metadata } from 'next';
import NavbarWrapper from './NavbarWrapper';
import ScrollNav from '../components/ScrollNav';

export const metadata: Metadata = {
  title: 'Noesis Systems LLC',
  description: 'Helping you achieve and sustain your optimum mental health and mental performance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="gradient-background">
          <NavbarWrapper />
          {children}
        </div>
      </body>
    </html>
  );
}
