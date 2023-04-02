import './NavigationButton.css'
import { ArrowUp } from './Icons'

const NavigationButton = () => {
    return (
        <a className="navigation-button" href={"#section1"}>
            <ArrowUp/>
        </a>
    )
}

export default NavigationButton