
export const Anchor = ({text, href, Icon=undefined, ...props }) => {
    return (
        <a 
            className="
                flex p-3 text-md items-center gap-2 border-2 
                text-green-400 border-green-400 hover:text-black hover:bg-green-400 
                rounded-md duration-100 hover:drop-shadow-[0_0_10px_rgba(0,230,0,0.3)]"
            href={href} 
            {... props}
        >
            <Icon/> {text}
        </a>
    )
}