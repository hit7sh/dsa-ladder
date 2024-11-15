import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { SiGmail } from "react-icons/si";

import { Problem } from "./types/problemsType"
import { LinkedInIcon, TwitterIcon } from "./components/SocialMediaIcons";

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
                <SidebarGroupLabel className="text-black font-bold font-mono text-center">
                    Let's Connect👋
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=hit7sh@gmail.com"
                        target="_blank"
                    >
                        <div className="border-solid rounded-sm ml-2 px-4 p-1.5 border-black bg-slate-300">
                            <SiGmail size={20} color="red" />
                        </div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hitesh-saini-80499a1b3/"
                        target="_blank"
                    >
                        <div className="rounded-sm ml-2">
                            <LinkedInIcon></LinkedInIcon>
                        </div>
                    </a>

                    <a
                        href="https://www.x.com/hit7sh"
                        target="_blank"
                    >
                        <div className="rounded-sm ml-2">
                            <TwitterIcon></TwitterIcon>
                        </div>
                    </a>
                </SidebarGroupLabel>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-black text-lg bg-gray-600 mb-4">Problems</SidebarGroupLabel>

                    <SidebarGroupContent>
                        {
                            problems?.map((problem: Problem) => (
                                <div
                                    className={`pl-1 hover:cursor-pointer rounded-md text-black pt-1 pb-1 ${currentProblem?.title === problem?.title ? 'bg-blue-600' : 'bg-slate-300'}`}
                                    onClick={() => problem?.title !== currentProblem?.title && setCurrentProblem(problem)}
                                >
                                    {problem?.title}
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
