import js from '@eslint/js'
import apiLibrary from 'code-conventions/eslint/api-library'
import prettier from 'eslint-plugin-prettier/recommended'
import { Config, defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig(
  js.configs.recommended,
  tseslint.configs.recommended,
  ...(apiLibrary.configs.recommended as Config[]),
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
