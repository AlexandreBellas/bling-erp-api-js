import { createRequire } from 'node:module'
import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier/recommended'
import { Config, defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

const require = createRequire(import.meta.url)

/**
 * `code-conventions` is an optional GitHub dependency. npm installs it when
 * this environment can read AlexandreBellas/code-conventions and skips it
 * otherwise. A static import would abort lint in the skip case.
 */
function loadApiLibraryConfigs(): Config[] {
  try {
    const loaded = require('code-conventions/eslint/api-library') as {
      configs?: { recommended?: Config[] }
      default?: { configs?: { recommended?: Config[] } }
    }
    const apiLibrary = loaded.configs ? loaded : loaded.default

    return apiLibrary?.configs?.recommended ?? []
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
