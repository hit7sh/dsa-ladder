import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EDITOR_THEMES } from './constants'
import { TiArrowSortedDown } from "react-icons/ti";


const ThemeSelector = ({ setTheme }: { setTheme: any }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="h-[5vh] rounded border-solid border-4">Change Theme <TiArrowSortedDown /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                    {EDITOR_THEMES.map((theme) => (
                        <DropdownMenuItem key={theme} onClick={() => setTheme(theme)}>
                            <span>{theme}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ThemeSelector