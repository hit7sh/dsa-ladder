import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TiArrowSortedDown } from "react-icons/ti";

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
                    <Button variant="secondary">{language[0].toUpperCase() + language.slice(1)} <TiArrowSortedDown /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                        {LANGUAGES.map((lang) => (
                            <DropdownMenuItem key={lang.ui_name} onClick={() => onSelect(lang.name)}>
                                <span>{lang.ui_name}</span>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default LanguageSelector