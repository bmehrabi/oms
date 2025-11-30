// eslint.config.js
import { defineConfig } from 'eslint-define-config'
import tsConfig from './eslint.typescript.js'
import { globalIgnores } from '@eslint/globals'

export default defineConfig([
    globalIgnores(['dist']),

    // Your existing non-TypeScript rules...
    {
        // Other configs, JS rules, prettier, react, etc.
    },

    // Import TypeScript rules from the separate file
    tsConfig,
])
