export const LANGUAGES = [
    {
        name: 'c_cpp',
        ui_name: 'C++',
    },
    {
        name: 'python',
        ui_name: 'Python',
    },
    {
        name: 'javascript',
        ui_name: 'Javascript(NodeJs)',
    },
    {
        name: 'java',
        ui_name: 'Java',
    },
];

export const BACKEND_BASE_URL = 'https://dsa-ladder.onrender.com';

export const EDITOR_THEMES = [
    'ambiance',
    'chaos',
    'chrome',
    'clouds',
    'clouds_midnight',
    'cobalt',
    'crimson_editor',
    'dawn',
    'dracula',
    'dreamweaver',
    'eclipse',
    'github',
    'gob',
    'gruvbox',
    'idle_fingers',
    'iplastic',
    'katzenmilch',
    'kr_theme',
    'kuroir',
    'merbivore',
    'merbivore_soft',
    'mono_industrial',
    'monokai',
    'pastel_on_dark',
    'solarized_dark',
    'solarized_light',
    'sqlserver',
    'terminal',
    'textmate',
    'tomorrow',
    'tomorrow_night',
    'tomorrow_night_blue',
    'tomorrow_night_bright',
    'tomorrow_night_eighties',
    'twilight',
    'vibrant_ink',
    'xcode',
]

export const defaultCode: { [key: string]: string } = {
    c_cpp: (
        `#include<bits/stdc++.h>
using namespace std;

int main() {
    cin.tie(0)->sync_with_stdio(0);
    
    return 0;
}`),
    python: '',
    javascript: '',
    java: (
        `// NOTE: Don't change class Name from 'MainClass'
public class MainClass {
    public static void main(String args[]) {
        
    }
}`)
};