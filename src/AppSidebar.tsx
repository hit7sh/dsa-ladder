import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { Problem } from "./types/problemsType"

interface AppSidebarPropsI {
    problems: Problem[] | undefined;
    setCurrentProblem: any;
    currentProblem: Problem | undefined;
};

export function AppSidebar({
    problems,
    currentProblem,
    setCurrentProblem,
}: AppSidebarPropsI) {
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarGroupLabel className="text-black">Dsa Ladder</SidebarGroupLabel>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-black">Problems</SidebarGroupLabel>

                    <SidebarGroupContent>
                        {
                            problems?.map(({ title }: { title: string }) => (
                                <div
                                    className={`pl-1 ${currentProblem?.title === title && 'bg-blue-600'}`}
                                    onClick={() => setCurrentProblem(title)}
                                >
                                    {title}
                                </div>
                            ))
                        }
                    </ SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
