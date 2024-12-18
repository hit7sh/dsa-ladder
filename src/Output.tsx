
const Output = ({ output }: { output: string }) => (
    <>
        <div className="border-gray-300 bg-white h-24 border-4 pl-2" style={{ whiteSpace: "pre-line" }}>
            {output || '<<Empty>>'}
        </div>
    </>
);

export default Output