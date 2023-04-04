import './Button.css'

const Button = ({href, icon, text=""}) => {
    return ( 
        <a className='customButton' href={href} target="_blank">
            <span>{text} </span>{icon}
        </a>
    )
}

export default Button