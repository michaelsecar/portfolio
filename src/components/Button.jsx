
export const Button = ({value, callback}) => {
    return (
        <button onClick={callback}>
            {value}
        </button>
    )
}