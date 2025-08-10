// app/layout.tsx
'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/componets/Navbar';
import './globals.css';
import Fotter from "@/componets/Footer"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Hide Navbar on /admin and its subroutes
  const hideNavbar = pathname.startsWith('/admin');

  return (
    <html lang="en">
      <body>
        {!hideNavbar && <Navbar />}
        <main>{children}</main>
        <Fotter />
      </body>
    </html>
  );
}
