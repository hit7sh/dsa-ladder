interface CodeErrorsPropsT {
    compile_errors: undefined | string;
    runtime_errors: undefined | string;
};

const CodeErrors = ({ compile_errors, runtime_errors }: CodeErrorsPropsT) => {
    return (
        <>
            <div className="bg-red-400 mt-1 pl-2"> OUTPUT </div>
            <div>{compile_errors || runtime_errors}</div>
        </>
    )
}

export default CodeErrors