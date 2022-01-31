import { ReactNode } from 'react'

import Link from 'next/link'

import { AppConfig } from '@/utils/AppConfig'
import { ThemeChanger } from '@/components/DarkModeBtn'

type MainProps = {
  meta: ReactNode
  children: ReactNode
}

const Main = (props: MainProps) => {
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      {props.meta}

      <div className="mx-auto max-w-screen-xl dark:bg-black">
        <div className="border-b border-stone-400">
          <div className="pt-14 pb-8">
            <div className="font-montserrat cursor-default text-center text-3xl font-bold text-slate-900 ">
              {AppConfig.title}
            </div>
          </div>
          <div>
            <ul className="flex flex-wrap justify-between pb-4 text-lg sm:justify-end ">
              <li className="mx-8">
                <Link href="/">
                  <a className="border-none text-zinc-900 hover:text-stone-500">
                    Home
                  </a>
                </Link>
              </li>
              <li className="mr-8">
                <Link href="/portfolio/">
                  <a className="border-none text-zinc-900 hover:text-stone-500">
                    Portfolio
                  </a>
                </Link>
              </li>

              <li className="mr-8">
                <Link href="/about/">
                  <a className="border-none text-zinc-900 hover:text-stone-500">
                    About
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ThemeChanger />
        <div className="content mx-8 py-5 text-lg">{props.children}</div>
      </div>
    </div>
  )
}

export { Main }
