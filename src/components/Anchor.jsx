
export const Anchor = ({text, href, Icon=undefined, ...props }) => {
    return (
        <a 
            className="flex text-green-400 p-3 text-md items-center gap-2 border-2 border-green-400 hover:text-black hover:border-black hover:bg-green-400 rounded-md duration-100"
            href={href} 
            {... props}
        >
            <Icon/> {text}
        </a>
    )
}