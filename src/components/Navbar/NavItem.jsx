
export const NavItem = ({text, href, Icon=undefined, isCurrent=false}) => {
    return (
            <a href={href} className={`
                text-md p-4 gap-2 border-b-2 border-transparent duration-100
                flex items-center justify-center 
                text-gray-200 hover:text-gray-400 hover:border-b-gray-400 w-32
                ${isCurrent?'text-green-400 border-b-green-400' :''}`}
            >
                {Icon?<Icon/>:<></>}
                {text}
            </a>
    )
}