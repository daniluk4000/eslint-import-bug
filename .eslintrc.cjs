module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    env: {
        node: true,
    },
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'plugin:import/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    settings: {
        "import/ignore": ["node_modules"],
        "import/extensions": [".ts"],
        "import/resolver": {
            typescript: {},
            node: {
                extensions: [".ts"],
            },
        },
    },
};
