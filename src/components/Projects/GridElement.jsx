
export const GridElement = ({title, description, img=undefined, callback, identifier, image="#"}) => {
    return (
        <div 
            className="rounded-md backdrop-blur-sm border-2 border-gray-600 duration-75 opacity-90  overflow-hidden
            shadow-gray-600/10 shadow-lg
            hover:opacity-100 hover:shadow-green-600/10 hover:border-green-600
            [&>img]:hover:opacity-100
            [&>div>h2]:hover:text-green-400
            "
            onClick={()=>callback(identifier)}
        >
            <div className="p-3 opacity-90 duration-100 bg-black backdrop-blur-lg">
                <h2 className="text-xl font-bold text-center">
                    {title}
                </h2>
                <p className="text-gray-300 text-sm">
                    {description}
                </p>
            </div>
           <img src={image} alt="Project image" className="fixed top-0 left-0 -z-10 opacity-70"/>
        </div>
    )
}