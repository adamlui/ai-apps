module.exports  = {
    'extends': ['eslint:recommended'],
    'ignorePatterns': ['**/*.md', '**/*.min.js'],
    'rules': {
        'indent': ['error', 4, { 'ignoredNodes': [ // enforce 4-space indentation, except for...
            'TemplateLiteral > *', // template literal children
            'ConditionalExpression', // ternarys
            'IfStatement > BlockStatement', // multi-line if's
            'BinaryExpression', // string concatenations, math, comparison, etc.
            'BlockStatement', 'SwitchCase', // closing braces
            'ObjectExpression' // object literals
        ]}],
        'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }], // enforce single quotes for string literals
        'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }], // enforce spacing in object properties
        'comma-dangle': ['error', 'never'], // enforce no trailing commas in arrays or objects
        'no-async-promise-executor': 'off', // allow promise executor functions to be async (to accomodate await lines)
        'no-constant-condition': 'off', // allow constant conditions
        'no-empty': 'off', // allow empty blocks
        'no-useless-escape': 'off' // allow all escape chars cause ESLint sucks at detecting truly useless ones
    },
    'globals': { '$': true, 'chatgpt': true, 'chrome': true, 'global_module': true, 'GM_cookie': true },
    'parserOptions': { 'ecmaVersion': 2022, 'sourceType': 'script' },
    'overrides': [{ 'files': ['**/lib*/**.js'], 'parserOptions': { 'sourceType': 'module' }}],
    'env': { 'browser': true, 'node': true, 'es6': true, 'greasemonkey': true }
};
