import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible"
import { Textarea } from "./components/ui/textarea"

const Input = ({ inputText, setInputText }: { inputText: string, setInputText: any }) => {
    return (
        <>
            <Collapsible>
                <CollapsibleTrigger>
                    <div className="bg-violet-400 mt-1 pl-2 pr-2"> INPUT </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <Textarea className="h-24 border-4" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                </CollapsibleContent>
            </Collapsible>
        </>
    )
}

export default Input