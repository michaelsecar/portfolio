
export const Anchor = ({text, href, Icon=undefined, ...props }) => {
    return (
        <a 
            className="flex p-3 text-md items-center gap-2 border-2 border-gray-300 hover:text-green-400 hover:border-green-400 rounded-md duration-100"
            href={href} 
            {... props}
        >
            <Icon/> {text}
        </a>
    )
}