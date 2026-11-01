import { createRequire } from 'node:module'
import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier/recommended'
import { Config, defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

const require = createRequire(import.meta.url)

/**
 * `code-conventions` lives in a sibling checkout (`file:../code-conventions`).
 * CI does not have that directory: npm install leaves a dangling link, and a
 * static import aborts lint before any rule runs. Load the plugin when the
 * checkout is present and continue with the in-repo config otherwise.
 */
function loadApiLibraryConfigs(): Config[] {
  try {
    const apiLibrary = require('code-conventions/eslint/api-library') as {
      configs?: { recommended?: Config[] }
    }

    return apiLibrary.configs?.recommended ?? []
  } catch (error) {
    const code =
      typeof error === 'object' && error !== null && 'code' in error
        ? (error as { code?: string }).code
        : undefined

    if (code !== 'MODULE_NOT_FOUND') {
      throw error
    }

    return []
  }
}

export default defineConfig(
  js.configs.recommended,
  tseslint.configs.recommended,
  ...loadApiLibraryConfigs(),
  prettier,
  {
    files: ['src/entities/**', 'src/auth/**'],
    rules: { camelcase: 'off' }
  },
  {
    files: ['**/*.spec.ts', '**/*.spec.js', '**/*.test.ts', '**/*.test.js'],
    rules: { 'no-undef': 'off' }
  },
  {
    rules: {
      'space-before-function-paren': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-useless-constructor': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ]
    }
  },
  {
    ignores: ['src/helpers/types/*'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I'],
          filter: { regex: '^I|^(Window)$', match: false }
        },
        { selector: 'typeAlias', format: ['PascalCase'], prefix: ['I'] }
      ]
    }
  },
  {
    ignores: ['lib/**', 'node_modules/**', 'coverage/**']
  }
)
