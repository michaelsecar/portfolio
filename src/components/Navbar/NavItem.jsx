
export const NavItem = ({text, href, Icon=undefined}) => {
    return (
            <a href={href} className="text-md p-4 flex items-center justify-center gap-2 border-b-2 border-transparent text-gray-200 hover:text-green-400 hover:border-b-green-400 w-40">
                {Icon?<Icon/>:<></>}
                {text}
            </a>
    )
}