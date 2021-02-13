const {add, subtract} = require('./func.js');

console.log()

console.group('file resolution')
console.log(`require('./func)`, '\t', '=>', require.resolve('./func'))
console.log(`require('./func.js)`, '\t', '=>', require.resolve('./func.js'))
console.groupEnd()
console.log()

console.group('core APIs resolution')
console.log(`require('fs')`, '\t', '=>', require.resolve('fs'))
console.log(`require('util')`, '\t', '=>', require.resolve('util'))
console.groupEnd()
console.log()
