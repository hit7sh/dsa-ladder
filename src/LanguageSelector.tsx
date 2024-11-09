import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LANGUAGES } from './constants'

interface Props {
    language: string,
    onSelect: any,
}

const LanguageSelector = ({ language, onSelect }: Props) => {

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary">{language}🔽</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                        {LANGUAGES.map((lang) => (
                            <DropdownMenuItem key={lang} onClick={() => onSelect(lang)}>
                                <span>{lang}</span>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default LanguageSelector