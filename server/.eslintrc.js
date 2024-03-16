module.exports = {
	env: {
		node: '>=21.0.0',
		es2021: true
	},
	extends: ['eslint:recommended', 'plugin:node/recommended'],
	plugins: ['security', 'node', 'import'],
	rules: {
		// ESLint Recommended Rules
		'no-console': 'warn',
		'no-unused-vars': 'warn',

		// Node.js Rules
		'node/no-unsupported-features/node-builtins': ['error', { version: '>=21.0.0' }],
		'node/no-unsupported-features/es-builtins': ['error', { version: '>=21.0.0' }],
		'node/no-unsupported-features/es-syntax': ['error', { version: '>=21.0.0' }],

		// Security Rules
		'security/detect-object-injection': 'warn',
		'security/detect-possible-timing-attacks': 'warn',
		'security/detect-non-literal-regexp': 'warn',
		'security/detect-non-literal-fs-filename': 'warn',
		'security/detect-unsafe-regex': 'warn',
		'security/detect-child-process': 'warn',
		'security/detect-eval-with-expression': 'warn',
		'security/detect-non-literal-require': 'warn',
		'security/detect-pseudoRandomBytes': 'warn',
		'security/detect-new-buffer': 'warn',

		// Import Rules
		'import/no-unresolved': 'error',
		'import/no-extraneous-dependencies': 'error'

		// Mozilla Rules
		// 'mozilla/secure-object-assign': 'warn'
	}
};
