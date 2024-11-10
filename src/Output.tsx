
const Output = ({ output }: { output: string }) => {
    console.log({ output });

    return (
        <>
            <div className="bg-blue-500 mt-1 pl-2"> OUTPUT </div>
            <div className="bg-slate-500 pl-2" style={{ whiteSpace: "pre-line" }}>
                {output}
            </div>
        </>
    )
}

export default Output