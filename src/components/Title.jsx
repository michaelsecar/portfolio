
export const Title = ({title, description}) => {
    return (
        <div className="py-8">
            <h2 className="text-4xl font-bold text-green-400 py-4">
                {title}
            </h2>
            <p className="">
                {description}
            </p>
        </div>
    )
}