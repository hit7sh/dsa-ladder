import CodeEditor from "./CodeEditor";
import CodingProblem from "./CodingProblem";
import CodingProblemMock from "../mocks/CodingProblemsMock.json"
import { AppSidebar } from "./AppSidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";

function App() {

  return (
    <>
      <SidebarProvider defaultOpen={false} >
        <AppSidebar />
        <main>
          <div className="flex justify-between bg-slate-500 font-bold pt-1 pb-1">

            <SidebarTrigger />
            <div className="">Your Dsa Ladder </div>
            <div className="pr-5">User</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <CodeEditor />
            <CodingProblem problem={CodingProblemMock} />
          </div>
        </main>
      </SidebarProvider>
    </>
  )
}

export default App;
