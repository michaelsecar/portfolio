
export const StackItem = ({item, Icon=undefined}) => {
    return (
        <div className="p-4 flex flex-col items-center ">
            {Icon?<Icon/>:<></>}
            <span>{item}</span>
        </div>
    )
}