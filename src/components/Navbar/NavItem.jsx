
export const NavItem = ({text, href}) => {
    return (
        <div className="border-b-2 border-b-transparent p-3 hover:border-b-green-400 hover:bg-gray200 duration-100">
            <a href={href} className="text-xl text-gray-200 hover:text-green-400  p-4">{text}</a>
        </div>
    )
}