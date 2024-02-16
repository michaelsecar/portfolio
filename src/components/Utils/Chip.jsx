
export const Chip = ({text, ...props}) => {
    const colors = {
        "react": "#579DD7",
        "django": "#509A78",
        "react-native": "white",
        "typescript": "#62b4eA",
        "python": "#bf9",
        "sql": "#999",
        "javascript": "#F1F300",
        "electron": "#95ECFB",
        "firebase": "#FFB000",
        "chat-gpt": "#66AE9C",
    }
    return (
        <span className="
            font-mono bg-black inline-block mr-1
            rounded-xl text-xs p-1 border-2 
            border-gray-600 duration-100 
            " {...props}
            style={{
                borderColor:`${colors[text]}`,
                color:`${colors[text]}`
            }}
        >
            {text} 
        </span>
    )
}