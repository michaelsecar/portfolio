import { useState, useEffect } from 'react'

export const useScroll = () => {
    const [currentSection, setCurrentSection] = useState(0)

    const handleScroll = () => {
        const sections = document.querySelectorAll('section')
        const scrollPosition = window.scrollY
        sections.forEach((section, index) => {
            if (scrollPosition >= section.offsetTop - 100) {
                setCurrentSection(index)
            }
        })
    }

    useEffect(()=>{
        // Scroll
        window.addEventListener('scroll', handleScroll)
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    
    return [currentSection]
}