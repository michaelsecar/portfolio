
export const Button = ({value, callback, Icon=undefined}) => {
    return (
        <button 
            className="
                p-3 border-2 rounded-md flex items-center gap-2 duration-100
                border-green-400 text-green-400 
                hover:border-black hover:text-black hover:bg-green-400 hover:drop-shadow-[0_0_10px_rgba(0,230,0,0.3)]
                "
            onClick={callback}
        >
            {Icon?<Icon/>:<></>}{value}
        </button>
    )
}