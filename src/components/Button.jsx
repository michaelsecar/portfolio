
export const Button = ({value, callback, Icon=undefined}) => {
    return (
        <button 
            className="p-3 border-2 border-green-400 text-green-400 rounded-md flex items-center gap-2 hover:border-black hover:text-black hover:bg-green-400 duration-100"
            onClick={callback}
        >
            {Icon?<Icon/>:<></>}{value}
        </button>
    )
}