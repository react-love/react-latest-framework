module.exports = {
    "extends": [
        "eslint:recommended"
    ],
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
        "commonjs": true,
        "worker": true,
        "amd": true,
        "mocha": true,
        "jest": true,
        "jquery": true,
        "serviceworker": true
    },
    "settings": {
        "import/ignore": [
            "node_modules"
        ]
    },
    "rules": {
        "indent": [1, "tab"],
        "quotes": [2, "single"],
        "linebreak-style": [2, "unix"],
        "semi": [2, "never"],
        "no-cond-assign": 2,
        "no-constant-condition": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-console": 1,
        "no-debugger": 1,
        "no-var": 1,
        "no-trailing-spaces": 0,
        "eol-last": 0,
        "no-unused-vars": 0,
        "no-underscore-dangle": 0,
        "no-alert": 0,
        "no-lone-blocks": 0,
        "jsx-quotes": 1,
        "react/display-name": 1,
        "react/forbid-prop-types": 1,
        "react/jsx-boolean-value": 1,
        "react/jsx-closing-bracket-location": 1,
        "react/jsx-curly-spacing": 1,
        "react/jsx-equals-spacing": 1,
        "react/jsx-handler-names": 1,
        "react/jsx-indent-props": 1,
        "react/jsx-indent": 1,
        "react/jsx-key": 1,
        "react/jsx-max-props-per-line": 1,
        "react/jsx-no-bind": 1,
        "react/jsx-no-duplicate-props": 1,
        "react/jsx-no-literals": 1,
        "react/jsx-no-undef": 1,
        "react/jsx-pascal-case": 1,
        "react/jsx-quotes": 1,
        "react/jsx-sort-prop-types": 1,
        "react/jsx-sort-props": 1,
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/no-danger": 1,
        "react/no-deprecated": 1,
        "react/no-did-mount-set-state": 1,
        "react/no-did-update-set-state": 1,
        "react/no-direct-mutation-state": 1,
        "react/no-is-mounted": 1,
        "react/no-multi-comp": 1,
        "react/no-set-state": 1,
        "react/no-string-refs": 1,
        "react/no-unknown-property": 1,
        "react/prefer-es6-class": 1,
        "react/prop-types": 1,
        "react/react-in-jsx-scope": 1,
        "react/require-extension": 1,
        "react/self-closing-comp": 1,
        "react/sort-comp": 1,
        "react/wrap-multilines": 1
    }
};