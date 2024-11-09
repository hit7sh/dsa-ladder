import CodeEditor from "./CodeEditor";

function App() {

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <CodeEditor />
        <div>Problem Statement</div>
      </div>
    </>
  )
}

export default App;
