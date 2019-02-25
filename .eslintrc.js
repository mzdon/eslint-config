module.exports = {
    "env": {
        "browser": true,
        "jest": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier"
    ],
    "plugins": [
        "prettier",
        "react",
        "jest"
    ],
    "rules": {
        "prettier/prettier": [
            "error",
            {
                "tabWidth": 4,
                "trailingComma": "none",
                "bracketSpacing": false,
                "jsxBracketSameLine": true
            }
        ],
        "no-var": "error",
        "sort-imports": "error",
        "no-unexpected-multiline": "error",
        "no-console": [
            "error",
            {
                "allow": ["error"]
            }
        ]
    }
};
