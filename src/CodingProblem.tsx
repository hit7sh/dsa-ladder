
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import remarkMath from 'remark-math';

interface propsI {
    problem: any,
};

const CodingProblem = ({ problem }: propsI) => {
    return (
        <div className="h-[93vh] overflow-y-scroll">
            <div className="bg-blue-500 p-1.5 rounded-md text-center font-bold">{problem?.title}</div>
            <br />
            <div className="markdown-container">
                <ReactMarkdown rehypePlugins={[rehypeKatex, remarkMath]}>
                    {problem?.description}
                </ReactMarkdown>
            </div>
            <div className="markdown-container">
                <ReactMarkdown rehypePlugins={[rehypeKatex, remarkMath]}>
                    {problem?.problemStatement}
                </ReactMarkdown>
            </div>
            <br />
            <div className="markdown-container">
                <div className="font-bold">Constraints:</div>
                <ReactMarkdown rehypePlugins={[rehypeKatex, remarkMath]}>
                    {problem?.constraints}
                </ReactMarkdown>
            </div>
            <br />
            <div className="markdown-container">
                <div className="font-bold">Input Format:</div>
                <ReactMarkdown rehypePlugins={[rehypeKatex, remarkMath]}>
                    {problem.input_format}
                </ReactMarkdown>
            </div>
            <br />
            <div className="markdown-container">
                <div className="font-bold">Output Format:</div>
                <ReactMarkdown rehypePlugins={[rehypeKatex, remarkMath]}>
                    {problem.output_format}
                </ReactMarkdown>
            </div>
            <br />
            {
                problem?.examples?.map?.((example: string) => (
                    <>
                        <div className="markdown-container">
                            <ReactMarkdown rehypePlugins={[rehypeKatex, remarkMath]}>
                                {example}
                            </ReactMarkdown>
                        </div>
                        <br />
                    </>
                ))
            }
            <br />
            <br />
        </div>
    )
}

export default CodingProblem;