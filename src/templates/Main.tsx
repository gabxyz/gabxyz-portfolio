import { ReactNode } from 'react'

import Link from 'next/link'

import { AppConfig } from '@/utils/AppConfig'
import { ThemeChanger } from '@/components/DarkModeBtn'
import { BiBriefcase, BiHomeAlt } from 'react-icons/bi'
import { BsPatchQuestion } from 'react-icons/bs'
import MobileMenu from '@/components/MobileMenu'

type MainProps = {
  meta: ReactNode
  children: ReactNode
}

export const Main = (props: MainProps) => {
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      {props.meta}

      <div className="mx-auto max-w-screen-xl">
        <div className="header-border border-b border-stone-400">
          <div className="flex flex-col justify-between md:flex md:flex-row md:items-center">
            <div className="mx-4 pt-10 pb-10 md:pt-14 md:pb-4 md:pl-4">
              <div className="cursor-default text-left text-3xl font-bold text-slate-900 dark:text-gray-700">
                {AppConfig.title}
              </div>
              <div className="text-md cursor-default text-left text-gray-700 ">
                {AppConfig.description}
              </div>
            </div>
            <div className="flex flex-row-reverse items-start justify-between md:flex-col md:items-end">
              <div className="mx-4 mb-4 md:mx-4">
                <ThemeChanger />
              </div>
              <MobileMenu />
              {/* Medium+ menu */}
              <ul className="hidden md:flex md:flex-row md:items-center md:justify-between md:pt-4">
                <li className="mr-4 flex h-8 w-24 flex-row items-center justify-center rounded-lg transition duration-500 ease-in-out hover:bg-gray-300">
                  <Link href="/">
                    <a className="flex flex-row border-none text-zinc-900 hover:text-stone-500 dark:text-gray-700">
                      <BiHomeAlt size={20} className="mr-1" />
                      Home
                    </a>
                  </Link>
                </li>

                <li className="mr-4 flex h-8 w-28 flex-row items-center justify-center rounded-lg transition duration-500 ease-in-out hover:bg-gray-300">
                  <Link href="/portfolio/">
                    <a className="flex flex-row border-none text-zinc-900 hover:text-stone-500 dark:text-gray-700">
                      <BiBriefcase size={20} className="mr-1" />
                      Portfolio
                    </a>
                  </Link>
                </li>

                <li className="mr-4 flex h-8 w-24 flex-row items-center justify-center rounded-lg transition duration-500 ease-in-out hover:bg-gray-300">
                  <Link href="/about/">
                    <a className="flex flex-row border-none text-zinc-900 hover:text-stone-500 dark:text-gray-700">
                      <BsPatchQuestion size={20} className="mr-1" />
                      About
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content mx-8 py-5 text-lg">{props.children}</div>
      </div>
    </div>
  )
}
