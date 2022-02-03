import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { BsPatchQuestion } from 'react-icons/bs'
import { BiBriefcase, BiHomeAlt } from 'react-icons/bi'
import useDelayedRender from 'use-delayed-render'
import classnames from 'classnames'

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 80,
      exitDelay: 600
    }
  )

  const toggleMenu = () => {
    const content = document.querySelector('.content')
    const headerBorder = document.querySelector('.header-border')
    if (isMenuOpen) {
      setIsMenuOpen(false)
      setTimeout(() => {
        content?.classList.remove('hidden')
        headerBorder?.classList.add('border-b')
      }, 700)
    } else {
      setIsMenuOpen(true)
      content?.classList.add('hidden')
      headerBorder?.classList.remove('border-b')
    }
  }

  return (
    <div className="pt-1 md:hidden">
      <button
        type="button"
        aria-label="Toggle menu"
        className="mx-4 flex items-center md:hidden"
        onClick={toggleMenu}
      >
        {isMenuRendered ? (
          <AiOutlineClose size={26} />
        ) : (
          <AiOutlineMenu size={26} />
        )}
      </button>
      {isMenuMounted && (
        <ul
          className={classnames(
            'menu my-6 ml-4 flex w-72 flex-col gap-6 pb-8',
            isMenuRendered && 'menuVisible'
          )}
        >
          <li className="text-md active:rounded-x-lg border-b border-stone-400 pb-2 active:rounded-t-lg active:bg-gray-200">
            <Link href="/">
              <a className="flex flex-row border-none text-zinc-900 dark:text-gray-700">
                <BiHomeAlt size={18} className="mr-2" />
                Home
              </a>
            </Link>
          </li>

          <li className="text-md border-b border-stone-400 pb-2">
            <Link href="/portfolio/">
              <a className="flex flex-row border-none text-zinc-900 dark:text-gray-700">
                <BiBriefcase size={18} className="mr-2" />
                Portfolio
              </a>
            </Link>
          </li>

          <li className="text-md border-b border-stone-400 pb-2">
            <Link href="/about/">
              <a className="flex flex-row border-none text-zinc-900 dark:text-gray-700">
                <BsPatchQuestion size={18} className="mr-2" />
                About
              </a>
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}
