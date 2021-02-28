import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import NextLink from 'next/link'

import ToggleTheme from './ToggleTheme'
import Footer from './Footer'

export default function Page({ children }) {
  const [ mounted, setMounted ] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <>
      <nav className="sticky top-0 z-10 flex justify-between items-center max-w-4xl w-full px-8 mx-auto bg-white dark:bg-black dark:border-transparent border-b border-gray-100">

        <ToggleTheme theme={theme} setTheme={setTheme} mounted={mounted}/>

        <div className="text-sm md:text-lg">
          <NextLink href="/">
            <a className="p-2 md:p-4 text-gray-900 dark:text-gray-100">Beranda</a>
          </NextLink>
          <NextLink href="/blog">
            <a className="p-2 md:p-4 text-gray-900 dark:text-gray-100">Blog</a>
          </NextLink>
        </div>

      </nav>


      <main className="flex flex-col justify-center px-8 bg-white dark:bg-black">
        {children}
      </main>


      <Footer/>
    </>
  )
}
