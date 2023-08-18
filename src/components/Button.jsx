
export const Button = ({value, callback, Icon=undefined}) => {
    return (
        <button 
            className="p-3 border-2 border-gray-600 text-gray-200 rounded-md flex items-center gap-2 hover:border-green-400 hover:text-green-400 duration-100"
            onClick={callback}
        >
            {Icon?<Icon/>:<></>}{value}
        </button>
    )
}