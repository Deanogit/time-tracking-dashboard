import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({
  variable: '--font-rubic-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Frontend Mentor Challenge Solution',
  description: 'Time Tracking Dashboard Solution built by Dean',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable}  antialiased  min-h-[100vh] items-center justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
