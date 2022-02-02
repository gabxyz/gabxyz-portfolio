import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { BsSun, BsMoonStars } from 'react-icons/bs'

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted)
    return (
      <div className="flex h-8 w-16 animate-pulse items-center justify-between rounded-lg bg-gray-300 p-1.5"></div>
    )
  const pageTheme = document.documentElement.className

  return (
    <div>
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        checked={theme === 'dark' ? true : false}
        readOnly
        onClick={() => setTheme(pageTheme === 'light' ? 'dark' : 'light')}
      />
      <label htmlFor="toggle">
        <div className="flex h-8 w-16 items-center justify-between rounded-lg bg-gray-300 p-1.5">
          <div className="toggle-dot absolute z-10 h-6 w-6 transform rounded-md bg-white duration-300 ease-in-out"></div>
          <BsSun />
          <BsMoonStars />
        </div>
      </label>
    </div>
  )
}
