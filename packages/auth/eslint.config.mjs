import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
    { languageOptions: { globals: globals.browser } },
    {
        ignores: ['node_modules', 'dist', 'public', '.nuxt', '.next', '.angular'],
    },
    pluginJs.configs.recommended,
    eslintConfigPrettier,
    ...tseslint.configs.recommended,
    {
        rules: {
            curly: ['error', 'all'],
            'no-console': ['error', { allow: ['warn', 'error'] }],
            'no-param-reassign': ['error', { props: false }],
            'object-curly-spacing': ['error', 'always'],
            'array-bracket-spacing': ['error', 'never'],
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
            '@typescript-eslint/interface-name-prefix': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-namespace': 'off'
        },
    },
];
