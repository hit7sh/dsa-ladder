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


const CodeEditor = () => {
    const [code, setCode] = useState<string | undefined>('');
    const [language, setLanguage] = useState('c_cpp');
    const [theme, setTheme] = useState('cobalt');
    const onSelect = (language: string) => {
        setLanguage(language);
    };

    return (
        <div className="">
            <div className="flex flex-row-reverse pr-4">
                <Button onClick={() => alert('Backend work is in Progress 🚧')} variant="secondary">Run ▶️</Button>
                <LanguageSelector language={language === 'c_cpp' ? 'C++' : language} onSelect={onSelect} />
                <ThemeSelector setTheme={setTheme} />
            </div>
            <AceEditor
                height="95vh"
                width="100%"
                mode={language}
                fontSize="16px"
                defaultValue=""
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
        </div>
    )
}

export default CodeEditor