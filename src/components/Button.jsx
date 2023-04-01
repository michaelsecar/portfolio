import './Button.css'

const Button = ({value, action, icon}) => {
    return ( 
        <button className='customButton' onClick={action}>
            <span>
                {value}
            </span>
            {icon}
        </button>
    )
}

export default Button