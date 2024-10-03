import js from '@eslint/js';
import globals from 'globals';
import json from 'eslint-plugin-json';

export default [
    js.configs.recommended,
    {
        rules: {
            'indent': 'off', 'no-unexpected-multiline': 'off', 'key-spacing': 'off', // allow whitespace anywhere
            'quotes': ['error', 'single', { 'allowTemplateLiterals': true }], // enforce single quotes except backticks to avoid escaping quotes
            'comma-dangle': ['error', 'never'], // enforce no trailing commas in arrays or objects
            'no-async-promise-executor': 'off', // allow promise executor functions to be async (to accomodate await lines)
            'no-constant-condition': 'off', // allow constant conditions
            'no-empty': 'off', // allow empty blocks
            'no-inner-declarations': 'off', // allow function declarations anywhere
            'no-useless-escape': 'off', // allow all escape chars cause ESLint sucks at detecting truly useless ones
            'no-unused-vars': ['error', { 'caughtErrors': 'none' }] // allow unused named args in catch blocks
        },
        languageOptions: {
            ecmaVersion: 2022, sourceType: 'script',
            globals: {
                ...globals.browser, ...globals.node, ...globals.greasemonkey,
                chatgpt: 'readonly', chrome: 'readonly', CryptoJS: 'readonly', dom: 'readonly', GM_cookie: 'readonly',
                hljs: 'readonly', ipv4: 'readonly', marked: 'readonly', renderMathInElement: 'readonly'
            }
        }
    },
    { files: ['**/*.mjs', '**/components/*.js', '**/lib/*.js'], languageOptions: { sourceType: 'module' }},
    { files: ['**/*.json'], ...json.configs['recommended'] }
];
