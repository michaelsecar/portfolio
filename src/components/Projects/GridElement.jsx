
export const GridElement = ({title, description, img=undefined, callback, identifier}) => {
    return (
        <div 
            className="hover:scale-105 hover:opacity-100 backdrop-blur-sm border-2 border-gray-300 p-2 duration-100 opacity-80 hover:cursor-pointer" 
            onClick={()=>callback(identifier)}
        >
            <h2 className="text-xl font-bold">
                {title}
            </h2>
            <p className="text-gray-400">
                {description}
            </p>
        </div>
    )
}