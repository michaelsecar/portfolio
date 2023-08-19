
export const ContactInput = ({input, callback=undefined}) => {
    return (
        <div className="flex flex-col pb-2">
            <label htmlFor={input} className="font-bold pb-2">
                {input}
            </label>
            <input id={input} type="text" className="bg-black border-2 border-gray-600 p-2 rounded-md focus:border-green-400 focus:outline-none"/>
        </div>
    )
}