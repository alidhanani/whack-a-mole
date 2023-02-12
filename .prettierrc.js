module.exports = {
    trailingComma: 'es5',
    singleQuote: true,
    printWidth: 80,
    bracketSpacing: true,
  
    jsxSingleQuote: true,
  
    importOrder: [
      '^public/(.*)$',
      '^src/(.*)$',
      '^dist/(.*)$',
      '^[./]',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
  };