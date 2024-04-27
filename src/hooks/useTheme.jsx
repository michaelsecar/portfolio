import { useToggle } from './useToggle'

export const useTheme = () => {
    const isUsingDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const [isDarkMode, toggleMode] = useToggle(isUsingDarkMode)

    const toggleTheme = () => {
        document.documentElement.classList.remove('dark', 'light')
        document.documentElement.classList.add(isDarkMode?'dark':'light')
        
        // Update theme state
        toggleMode()
    }
    return [isDarkMode, toggleTheme]
}