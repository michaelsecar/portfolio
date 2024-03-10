import { useState } from 'react'
import { Moon } from '../../icons/Moon'
import { Sun } from '../../icons/Sun'

export const ToogleMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'dark')
    const toggle = () => {
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
        setTheme(localStorage.getItem('theme'))
        localStorage.theme = theme
        if (theme === 'light') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }
    return (
        <button className="border-2 border-gray-400 rounded-full p-1" onClick={toggle}>
            {
                localStorage.getItem('theme') === 'light' ? <Sun/>: <Moon/>
            }
        </button>
    )
}