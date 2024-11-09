import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UilAngleDown } from '@iconscout/react-unicons'

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
                    <Button variant="secondary">{language[0].toUpperCase() + language.slice(1)} <UilAngleDown /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                        {LANGUAGES.map((lang) => (
                            <DropdownMenuItem key={lang} onClick={() => onSelect(lang)}>
                                {
                                    lang === 'c_cpp' ? <span>C++</span> : <span>{lang[0].toUpperCase() + lang.slice(1)}</span>
                                }
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default LanguageSelector