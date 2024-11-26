import { useState } from "react";
import { Button } from "./components/ui/button";

interface SubmissionPropTypes {
    submitResponse: {
        expectedOutput?: string;
        codeOutput?: string;
        input?: string;
        verdict: string;
    }[]
};



const Submission = ({ submitResponse }: SubmissionPropTypes) => {
    const [testCaseDetails, setTestCaseDetails] = useState<undefined | {
        expectedOutput?: string | undefined,
        codeOutput?: string | undefined,
        input?: string | undefined,
        verdict: string,
    }>(submitResponse?.[0]);

    return (
        <>
            <div className="bg-blue-200 pl-2" style={{ whiteSpace: "pre-line" }}>
                {submitResponse.length === 0 && 'Please Submit your code.'}
                <link rel="icon" type="image/svg+xml" href="./src/assets/code.svg" />
                <div className="flex flex-wrap">
                    {submitResponse?.map((resp, index) => {
                        return (
                            <Button
                                onClick={() => index < 3 && setTestCaseDetails(resp)}
                                key={index}
                                variant="secondary"
                                className="m-1"
                            >
                                {resp.verdict === 'AC' ? (
                                    <svg className="w-24 h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#314D1C">
                                        <path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#8B1A10"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                                )}
                                {`Test ${index + 1}`}
                            </Button>);
                    })}
                </div>
                <div>
                    <div className="pl-2 mr-2 bg-slate-400 rounded-t-sm">Input</div>
                    <div className="pl-2 mr-2 bg-white mb-2 rounded-b-sm">{testCaseDetails?.input}</div>

                    <div className="pl-2 mr-2 bg-slate-400 rounded-t-sm">Expected Output: </div>
                    <div className="pl-2 mr-2 bg-white mb-2 rounded-b-sm">{testCaseDetails?.expectedOutput}</div>

                    <div className="pl-2 mr-2 bg-slate-400 rounded-t-sm">Your Output: </div>
                    <div className="pl-2 mr-2 bg-white mb-2 rounded-b-sm">{testCaseDetails?.codeOutput}</div>
                </div>
            </div>
        </>
    )
}

export default Submission;