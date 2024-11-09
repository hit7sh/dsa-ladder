import { useState } from 'react';
import AceEditor from 'react-ace';
import LanguageSelector from './LanguageSelector';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

import "ace-builds/src-noconflict/mode-c_cpp"
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/mode-java"
import "ace-builds/src-noconflict/ext-language_tools";
import { Button } from './components/ui/button';


const CodeEditor = () => {
    const [code, setCode] = useState<string | undefined>('');
    const [language, setLanguage] = useState('c_cpp');

    const onSelect = (language: string) => {
        setLanguage(language);
    };

    return (
        <div className="">
            <div className="flex flex-row-reverse pr-4">
                <Button variant="secondary">Run▶️</Button>
                <LanguageSelector language={language} onSelect={onSelect} />
            </div>
            <AceEditor
                height="90vh"
                width="100%"
                mode={language}
                fontSize="16px"
                defaultValue=""
                highlightActiveLine={true}
                theme="monokai"
                setOptions={{
                    enableLiveAutocompletion: true,
                    showLineNumbers: true,
                    tabSize: 2,
                }}
                value={code}
                onChange={
                    (value) => setCode(value)
                }
            />
        </div>
    )
}

export default CodeEditor