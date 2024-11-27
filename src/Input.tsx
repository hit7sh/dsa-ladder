import { Textarea } from "./components/ui/textarea"

const Input = ({ inputText, setInputText }: { inputText: string, setInputText: any }) => {
    return (
        <>
            <Textarea
                className="border-gray-300 bg-white h-24 border-4"
                value={inputText}
                placeholder="Write custom input here..."
                onChange={(e) => setInputText(e.target.value)}
            />
        </>
    )
}

export default Input