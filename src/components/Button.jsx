
export const Button = ({value, callback, Icon=undefined}) => {
    return (
        <button 
            className="p-3 border-2 border-green-400 text-green-400 rounded-md flex items-center gap-2 hover:border-gray-400 hover:text-gray-400 duration-100"
            onClick={callback}
        >
            {Icon?<Icon/>:<></>}{value}
        </button>
    )
}