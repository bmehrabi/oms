// eslint.typescript.js
import tseslint from 'typescript-eslint'

export default {
    files: ['**/*.{ts,tsx}'],
    extends: [
        tseslint.configs.recommendedTypeChecked,
        // or: tseslint.configs.strictTypeChecked,
        tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
        parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
        },
    },
}
