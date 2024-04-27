import { useState } from 'react'

export const useToggle = (initialState=false) => {
    const [on, setState] = useState(initialState)
    const toggle = () => {
        setState(!on)
    }
    return [on, toggle]
}