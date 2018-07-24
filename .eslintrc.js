module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true,
		"amd": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2016,
        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": [
            "error",
            "windows"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};