import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import LeftSidebar from '@/components/shared/LeftSidebar';
import RightSidebar from '@/components/shared/RightSidebar';
import BottomBar from '@/components/shared/BottomBar';
import TopBar from '@/components/shared/TopBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Threads",
  description: "A Threads Meta App created with Next JS 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopBar />
          <main>
            <LeftSidebar />
            <section className='main-container'>
              <div className='w-full max-w-4xl'>
                {children}
              </div>
            </section>
            <RightSidebar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  )
}
