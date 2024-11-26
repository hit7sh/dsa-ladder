
const Output = ({ output }: { output: string }) => {
    console.log({ output });

    return (
        <>
            <div className="bg-blue-200 pl-2" style={{ whiteSpace: "pre-line" }}>
                {output || '<<Empty>>'}
            </div>
        </>
    )
}

export default Output