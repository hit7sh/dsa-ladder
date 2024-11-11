import { Textarea } from "./components/ui/textarea"

const Input = ({ inputText, setInputText }: { inputText: string, setInputText: any }) => {
    return (
        <>
            <Textarea
                className="bg-blue-200 h-24 border-4"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
        </>
    )
}

export default Input