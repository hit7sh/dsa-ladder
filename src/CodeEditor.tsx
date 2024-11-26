import { useState } from 'react';
import AceEditor from 'react-ace';
import LanguageSelector from './LanguageSelector';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-ambiance"
import "ace-builds/src-noconflict/theme-chaos"
import "ace-builds/src-noconflict/theme-chrome"
import "ace-builds/src-noconflict/theme-clouds"
import "ace-builds/src-noconflict/theme-clouds_midnight"
import "ace-builds/src-noconflict/theme-cobalt"
import "ace-builds/src-noconflict/theme-crimson_editor"
import "ace-builds/src-noconflict/theme-dawn"
import "ace-builds/src-noconflict/theme-dracula"
import "ace-builds/src-noconflict/theme-dreamweaver"
import "ace-builds/src-noconflict/theme-eclipse"
import "ace-builds/src-noconflict/theme-github"
import "ace-builds/src-noconflict/theme-gob"
import "ace-builds/src-noconflict/theme-gruvbox"
import "ace-builds/src-noconflict/theme-idle_fingers"
import "ace-builds/src-noconflict/theme-iplastic"
import "ace-builds/src-noconflict/theme-katzenmilch"
import "ace-builds/src-noconflict/theme-kr_theme"
import "ace-builds/src-noconflict/theme-kuroir"
import "ace-builds/src-noconflict/theme-merbivore"
import "ace-builds/src-noconflict/theme-merbivore_soft"
import "ace-builds/src-noconflict/theme-mono_industrial"
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/theme-pastel_on_dark"
import "ace-builds/src-noconflict/theme-solarized_dark"
import "ace-builds/src-noconflict/theme-solarized_light"
import "ace-builds/src-noconflict/theme-sqlserver"
import "ace-builds/src-noconflict/theme-terminal"
import "ace-builds/src-noconflict/theme-textmate"
import "ace-builds/src-noconflict/theme-tomorrow"
import "ace-builds/src-noconflict/theme-tomorrow_night"
import "ace-builds/src-noconflict/theme-tomorrow_night_blue"
import "ace-builds/src-noconflict/theme-tomorrow_night_bright"
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties"
import "ace-builds/src-noconflict/theme-twilight"
import "ace-builds/src-noconflict/theme-vibrant_ink"
import "ace-builds/src-noconflict/theme-xcode"
import "ace-builds/src-noconflict/mode-c_cpp"
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/mode-java"
import "ace-builds/src-noconflict/ext-language_tools";

import { Button } from './components/ui/button';
import ThemeSelector from './ThemeSelector';

import { TiMediaPlay } from "react-icons/ti";
import { BACKEND_BASE_URL, defaultCode } from './constants';
import axios, { AxiosRequestConfig } from 'axios';
import Output from './Output';
import CodeErrors from './CodeErrors';
import RingLoader from "react-spinners/RingLoader";
import Input from './Input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const config: AxiosRequestConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your_token_here'
    },
};

interface CodeEditorProps {
    isAuthenticated: undefined | boolean;
    userEmail: undefined | string;
}
const CodeEditor = ({ isAuthenticated, userEmail }: CodeEditorProps) => {
    const [language, setLanguage] = useState('c_cpp');
    const [code, setCode] = useState<string | undefined>(defaultCode[language]);
    const [theme, setTheme] = useState('cobalt');
    const [output, setOutput] = useState('');
    const [compile_errors, setCompileErrors] = useState('');
    const [runtime_errors, setRuntimeErrors] = useState('');
    const [inputText, setInputText] = useState('');
    const [loading, setLoading] = useState(false);

    const onSelect = (language: string) => {
        setLanguage(language);
        setCode(defaultCode[language]);
    };

    const runCode = async () => {
        if (!isAuthenticated) {
            alert('Please Sign In to Run code');
            return;
        }
        try {
            setLoading(true);
            setOutput('');
            const res = await axios.post(`${BACKEND_BASE_URL}/run`, {
                code,
                inputText,
                userEmail,
                language,
            }, config);

            setOutput(res.data.output);
            setCompileErrors(res.data.compile_errors);
            setRuntimeErrors(res.data.runtime_errors);
            setLoading(false);
        } catch (err) {
        }
    };

    return (
        <div>
            <div className="flex flex-row-reverse justify-between">
                <Button disabled={loading} className="rounded border-solid border-4" onClick={runCode} variant="secondary">
                    {!loading && 'Run'}
                    {!loading ? (<TiMediaPlay />) : (
                        <RingLoader
                            color="green"
                            loading={true}
                            size={25}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    )}
                </Button>
                <LanguageSelector language={language === 'c_cpp' ? 'C++' : language} onSelect={onSelect} />
                <ThemeSelector setTheme={setTheme} />
            </div>
            <div className="h-[88vh] overflow-y-scroll w-full">
                <AceEditor
                    height="70vh"
                    width="100%"
                    mode={language}
                    fontSize="16px"
                    defaultValue={defaultCode[language]}
                    highlightActiveLine={true}
                    theme={theme}
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
                {
                    (compile_errors || runtime_errors) && (
                        <CodeErrors
                            compile_errors={compile_errors}
                            runtime_errors={runtime_errors}
                        />)
                }
                {(<Tabs defaultValue={output ? 'Output' : 'Input'} className="bg-slate-500 pt-1">
                    <TabsList>
                        <TabsTrigger value="Input">
                            Input
                        </TabsTrigger>
                        <TabsTrigger value="Output">
                            Output
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="Input">
                        <Input inputText={inputText} setInputText={setInputText} />
                    </TabsContent>
                    <TabsContent value="Output">
                        <Output output={output} />
                    </TabsContent>
                </Tabs>
                )}
            </div>
            <br />
            <br />
        </div>
    )
}

export default CodeEditor