// .eslintrc.js
module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false, // Cela évite l'erreur de fichier de configuration manquant
    babelOptions: {
      presets: ['@babel/preset-react'], // Assurez-vous que vous avez les presets nécessaires
    },
  },
  extends: [
    'react-app',
    'react-app/jest',
    // autres extensions...
  ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-props-no-spreading": 'off',
        "react/function-component-definition": 'off'
      },
};






// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     jest: true
//   },
//   extends: [
//     'plugin:react/recommended',
//     'airbnb',
//     'prettier',
//   ],
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   plugins: [
//     'react',
//   ],
//   rules: {
//     'react/react-in-jsx-scope': 'off',
//     "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
//     "react/jsx-props-no-spreading": 'off',
//     "react/function-component-definition": 'off'
//   },
// };
