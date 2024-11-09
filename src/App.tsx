import CodeEditor from "./CodeEditor";
import CodingProblem from "./CodingProblem";
import CodingProblemMock from "../mocks/CodingProblemsMock.json"

function App() {

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <CodeEditor />
        <CodingProblem problem={CodingProblemMock} />
      </div>
    </>
  )
}

export default App;
