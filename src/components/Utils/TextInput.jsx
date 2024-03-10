
export const TextInput = ({input, callback=undefined, placeholder=""}) => {
    return (
        <div className="
            flex flex-col pb-2"
        >
            <label htmlFor={input} className="font-bold pb-2 text-gray-600 dark:text-gray-200">
                {input}
            </label>
            <input  
                className="
                    p-2 rounded-md 
                    dark:bg-black border-2 border-gray-600 
                    dark:focus:border-green-400 focus:border-green-600 focus:outline-none focus:drop-shadow-[0_0_10px_rgba(0,230,0,0.3)]
                    "
                placeholder={placeholder}
                onChange={(e)=>callback(e.target.value)}
                id={input} type="text" 
            />
        </div>
    )
}