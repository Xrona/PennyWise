import path from 'node:path'
import { fileURLToPath } from 'node:url'

import tailwindcss from 'eslint-plugin-tailwindcss'
import stylistic from '@stylistic/eslint-plugin'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import { fixupConfigRules } from '@eslint/compat'
import ts from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

const patchedConfig = fixupConfigRules([...compat.extends('next/core-web-vitals')])

const config = [
	...patchedConfig,
	...ts.configs.recommended,
	{
		plugins: {
			tailwindcss,
			'@stylistic': stylistic,
		},
		rules: {
			semi: ['error', 'never'],
			indent: ['error', 'tab'],
			'tailwindcss/classnames-order': 'error',
			'tailwindcss/no-custom-classname': 'error',
			'tailwindcss/enforces-shorthand': 'error',
			'tailwindcss/no-unnecessary-arbitrary-value': 'error',
			'tailwindcss/enforces-negative-arbitrary-values': 'error',
			'array-bracket-newline': ['error', { minItems: 3, multiline: true }],
			'array-bracket-spacing': ['error', 'never'],
			'array-element-newline': ['error', { minItems: 3, multiline: true }],
			'arrow-parens': ['error', 'as-needed'],
			'arrow-spacing': ['error', { before: true, after: true }],
			'block-spacing': ['error', 'always'],
			'brace-style': [
				'error',
				'1tbs',
				{ allowSingleLine: true },
			],
			'comma-dangle': ['error', 'always-multiline'],
			'@stylistic/comma-spacing': ['error', { before: false, after: true }],
			'@stylistic/comma-style': ['error', 'last'],
			'@stylistic/computed-property-spacing': ['error', 'never'],
			'@stylistic/curly-newline': ['error', 'always'],
			'@stylistic/dot-location': ['error', 'property'],
			'@stylistic/eol-last': ['error', 'always'],
			'@stylistic/function-call-spacing': ['error', 'never'],
			'@stylistic/function-paren-newline': ['error', 'multiline'],
			'@stylistic/generator-star-spacing': ['error', { before: false, after: true }],
			'@stylistic/indent-binary-ops': ['error', 'tab'],
			'@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
			'@stylistic/keyword-spacing': ['error', { before: true, after: true }],
			'@stylistic/line-comment-position': ['error', { position: 'above' }],
			'@stylistic/linebreak-style': ['error', 'unix'],
			'@stylistic/lines-between-class-members': ['error', 'always'],
			'@stylistic/max-len': [
				'error',
				{
					code: 100,
					tabWidth: 2,
					ignoreUrls: true,
					ignoreComments: false,
					ignoreRegExpLiterals: true,
					ignoreStrings: true,
					ignoreTemplateLiterals: true,
				},
			],
			'@stylistic/max-statements-per-line': ['error', { max: 1 }],
			'@stylistic/member-delimiter-style': [
				'error',
				{
					singleline: { delimiter: 'comma' },
					multiline: { delimiter: 'none' },
				},
			],
			'@stylistic/multiline-ternary': ['error', 'never'],
			'@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
			'@stylistic/no-confusing-arrow': 'error',
			'@stylistic/no-extra-parens': [
				'error',
				'all',
				{ ignoreJSX: 'multi-line' },
			],
			'@stylistic/no-extra-semi': 'error',
			'@stylistic/no-floating-decimal': 'error',
			'@stylistic/no-mixed-operators': 'error',
			'@stylistic/no-mixed-spaces-and-tabs': 'error',
			'@stylistic/no-multi-spaces': 'error',
			'@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
			'@stylistic/no-trailing-spaces': 'error',
			'@stylistic/no-whitespace-before-property': 'error',
			'@stylistic/nonblock-statement-body-position': ['error', 'beside'],
			'@stylistic/object-curly-newline': [
				'error',
				{
					ObjectExpression: {
						minProperties: 4,
						multiline: true,
						consistent: true,
					},
					ObjectPattern: {
						minProperties: 4,
						multiline: true,
						consistent: true,
					},
					ImportDeclaration: {
						minProperties: 4,
						multiline: true,
						consistent: true,
					},
					ExportDeclaration: {
						minProperties: 4,
						multiline: true,
						consistent: true,
					},
				},
			],
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@stylistic/object-property-newline': [
				'error',
				{
					allowAllPropertiesOnSameLine: true,
				},
			],
			'@stylistic/operator-linebreak': [
				'error',
				'before',
				{ overrides: { '=': 'none' } },
			],
			'@stylistic/padded-blocks': [
				'error',
				{
					blocks: 'never',
					classes: 'never',
					switches: 'never',
				},
				{
					allowSingleLineBlocks: true,
				},
			],
			'@stylistic/padding-line-between-statements': [
				'error',
				{
					blankLine: 'always',
					prev: '*',
					next: 'return',
				},
				{
					blankLine: 'always',
					prev: [
						'const',
						'let',
						'var',
					],
					next: '*',
				},
				{
					blankLine: 'any',
					prev: [
						'const',
						'let',
						'var',
					],
					next: [
						'const',
						'let',
						'var',
					],
				},
				{
					blankLine: 'always',
					prev: 'import',
					next: '*',
				},
				{
					blankLine: 'any',
					prev: 'import',
					next: 'import',
				},
				{
					blankLine: 'always',
					prev: 'export',
					next: '*',
				},
				{
					blankLine: 'any',
					prev: 'export',
					next: 'export',
				},
				{
					blankLine: 'always',
					prev: 'block-like',
					next: '*',
				},
				{
					blankLine: 'always',
					prev: '*',
					next: 'block-like',
				},
			],
			'@stylistic/quote-props': ['error', 'as-needed'],
			'@stylistic/quotes': [
				'error',
				'single',
				{
					avoidEscape: true,
					allowTemplateLiterals: false,
				},
			],
			'@stylistic/rest-spread-spacing': ['error', 'never'],
			'@stylistic/space-before-blocks': ['error', 'always'],
			'@stylistic/space-before-function-paren': ['error', { anonymous: 'always', asyncArrow: 'always' }],
			'@stylistic/space-in-parens': ['error', 'never'],
			'@stylistic/space-infix-ops': 'error',
			'@stylistic/space-unary-ops': ['error', { words: true, nonwords: false }],
			'@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],
			'@stylistic/template-curly-spacing': ['error', 'always'],
			'@stylistic/template-tag-spacing': ['error', 'never'],
			'@stylistic/type-annotation-spacing': 'error',
			'@stylistic/type-generic-spacing': 'error',
			'@stylistic/type-named-tuple-spacing': 'error',
			'@stylistic/yield-star-spacing': ['error', 'after'],
			//hehe

			'@stylistic/function-call-argument-newline': ['error', 'consistent'],
			'@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
			'capitalized-comments': [
				'off',
				'never',
				{
					line: {
						ignorePattern: '.*',
						ignoreInlineComments: true,
						ignoreConsecutiveComments: true,
					},
					block: {
						ignorePattern: '.*',
						ignoreInlineComments: true,
						ignoreConsecutiveComments: true,
					},
				},
			],
			'consistent-this': 'off',
			'func-names': 'warn',
			// 'id-denylist': [
			// 	'error',
			// 	'e',
			// 	'err',
			// 	'arr',
			// 	'el',
			// 	'elem',
			// ],
			// 'id-match': [
			// 	'error',
			// 	'^[a-zA-Z]+([A-Z][a-z]+)*$',
			// 	{ onlyDeclarations: true },
			// ],
			'logical-assignment-operators': [
				'error',
				'always',
				{
					enforceForIfStatements: true,
				},
			],
			'max-depth': ['off', 4],
			'max-lines-per-function': [
				'warn',
				{
					max: 50,
					skipBlankLines: true,
					skipComments: true,
					IIFEs: true,
				},
			],
			'max-params': ['error', 5],
			'new-cap': [
				'error',
				{
					newIsCap: true,
					newIsCapExceptions: [],
					capIsNew: false,
					capIsNewExceptions: [
						'Immutable.Map',
						'Immutable.Set',
						'Immutable.List',
					],
				},
			],
			'no-array-constructor': 'error',
			'no-bitwise': 'error',
			'no-inline-comments': 'error',
			'no-lonely-if': 'error',
			'no-multi-assign': ['error'],
			'no-nested-ternary': 'error',
			'no-object-constructor': 'error',
			'no-restricted-syntax': [
				'error',
				{
					selector: 'ForInStatement',
					message:
            'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
				},
				{
					selector: 'ForOfStatement',
					message:
            'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
				},
				{
					selector: 'LabeledStatement',
					message:
            'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
				},
				{
					selector: 'WithStatement',
					message:
            '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
				},
			],
			// 'no-underscore-dangle': [
			// 	'error',
			// 	{
			// 		allow: [],
			// 		allowAfterThis: false,
			// 		allowAfterSuper: false,
			// 		enforceInMethodNames: true,
			// 	},
			// ],
			'no-unneeded-ternary': ['error', { defaultAssignment: false }],
			'operator-assignment': ['error', 'always'],
			'prefer-exponentiation-operator': 'error',
			'prefer-object-spread': 'error',
			'sort-keys': [
				'off',
				'asc',
				{ caseSensitive: false, natural: true },
			],
			'sort-vars': 'off',
			// 'id-length': ['error', { min: 3, exceptionPatterns: ['i|j|k'] }],
			'unicode-bom': ['error', 'never'],
			'no-console': ['error'],
			'no-label-var': 'error',
			'no-restricted-globals': [
				'error',
				{
					name: 'isFinite',
					message:
            'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
				},
				{
					name: 'isNaN',
					message:
            'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
				},
			],
			'no-shadow-restricted-names': 'error',
			'no-undef-init': 'error',
			// TODO: disable?
			'no-undefined': 'error',
			'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
			'import/extensions': [
				'error',
				'never',
				{
					ignorePackages: true,
					pattern: {
						react: 'always',
					},
				},
			],
			'import/order': [
				'error',
				{
					'newlines-between': 'always',
					pathGroups: [
						{
							pattern: '~/shared/**',
							group: 'external',
							position: 'before',
						},
						{
							pattern: '~/entities/**',
							group: 'external',
							position: 'before',
						},
						{
							pattern: '~/features/**',
							group: 'external',
							position: 'before',
						},
						{
							pattern: '~/views/**',
							group: 'external',
							position: 'before',
						},
						{
							pattern: '~/app/**',
							group: 'external',
							position: 'before',
						},
					],
					distinctGroup: true,
				},
			],
			'arrow-body-style': [
				'error',
				'as-needed',
				{
					requireReturnForObjectLiteral: false,
				},
			],
			'no-useless-computed-key': 'error',
			'prefer-arrow-callback': [
				'error',
				{
					allowNamedFunctions: false,
					allowUnboundThis: true,
				},
			],
			'prefer-destructuring': [
				'error',
				{
					VariableDeclarator: {
						array: false,
						object: true,
					},
					AssignmentExpression: {
						array: true,
						object: false,
					},
				},
				{
					enforceForRenamedProperties: false,
				},
			],
			'prefer-template': 'error',
			'no-await-in-loop': 'error',
			'no-promise-executor-return': 'error',
			'no-template-curly-in-string': 'error',
			'no-unreachable-loop': ['error'],

			'@stylistic/jsx-closing-bracket-location': ['error', 'tag-aligned'],
			'@stylistic/jsx-closing-tag-location': ['error', 'tag-aligned'],
			'@stylistic/jsx-curly-brace-presence': ['error', 'never'],
			'@stylistic/jsx-curly-spacing': ['error', 'never'],
			'@stylistic/jsx-equals-spacing': ['error', 'never'],
			'@stylistic/jsx-first-prop-new-line': ['error', 'multiprop'],
			'@stylistic/jsx-max-props-per-line': ['error', { maximum: 1 }],
			'@stylistic/jsx-newline': ['error', { prevent: true }],
			'@stylistic/jsx-one-expression-per-line': ['error', { allow: 'literal' }],
			'@stylistic/jsx-pascal-case': ['error', { allowNamespace: true }],
			'@stylistic/jsx-props-no-multi-spaces': 'error',
			'@stylistic/jsx-self-closing-comp': ['error', { component: true, html: true }],
			'@stylistic/jsx-sort-props': [
				'error',
				{
					callbacksLast: true,
					shorthandFirst: true,
					multiline: 'first',
					ignoreCase: true,
					locale: 'auto',
				},
			],
			'@stylistic/jsx-tag-spacing': [
				'error',
				{
					closingSlash: 'never',
					beforeSelfClosing: 'always',
					afterOpening: 'never',
					beforeClosing: 'never',
				},
			],
			'@stylistic/jsx-wrap-multilines': [
				'error',
				{
					declaration: 'parens',
					assignment: 'parens',
					return: 'parens-new-line',
					arrow: 'parens-new-line',
					condition: 'ignore',
					logical: 'ignore',
					prop: 'ignore',
					propertyValue: 'ignore',
				},
			],
		},
	},
	{ ignores: ['.next/*', '.node_modules/*'] },
]

export default config
