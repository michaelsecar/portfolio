
export const Button = ({value, callback}) => {
    return (
        <button className="p-2 border-2 border-gray-600 text-gray-200 rounded-md hover:bg-gray-600"
        onClick={callback}>
            {value}
        </button>
    )
}