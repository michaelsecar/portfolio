import { Chip } from "../Utils/Chip"
import { GitIcon } from "../../icons/Icons"

export const GridElement = ({title, description, image="#", repository, technologies=[]}) => {
    return (
        <div 
            className="
            flex flex-col
            rounded-md border-2 border-gray-600 duration-75 opacity-90 overflow-hidden
            hover:opacity-100 hover:border-green-600 hover:drop-shadow-[0_0_10px_rgba(0,230,0,0.3)]
            bg-gray-50
            dark:bg-black
            "
        >
            <div>
                <div className="p-3 opacity-90 duration-100 backdrop-blur-lg
                ">
                    <div className="flex justify-between">
                        <h2 className="text-xl font-bold">
                            {title}
                        </h2>
                        <div>
                            <a className="
                                flex rounded-full border-2 p-1 border-gray-600
                                hover:border-green-600 hover:text-green-600
                                dark:hover:border-green-400 dark:hover:text-green-400
                                "
                                href={repository} target="_blank" rel="noopener noreferrer"
                            >
                                <GitIcon/>
                            </a>
                        </div>
                    </div>
                    <hr className="my-2 border-gray-600"/>
                   <p className="dark:text-gray-300 text-gray-800 text-sm">
                        {description}
                    </p>
                </div>
                <img src={image} alt="Project image" className="-z-10 dark:opacity-70"/>
            </div>
            <div className="p-2 m-1 h-full text-center">
                {
                    technologies.map((e,i)=>{
                        return <Chip key={i} text={e}/>
                    })
                }
            </div>
       </div>
    )
}