```
// index.js
// 

// require.js
const { readFileSync } = require('fs');
const path = require('path');
const { Script } = require('vm');

function my_require(filename) {
  // 拿到文件的内容
  const fileContent = readFileSync(path.resolve(__dirname, filename), 'utf-8');
  // fileContent 是 require 路径下文件的代码，这个代码是包含了 module.exports 的
  const wrappedFileContent = `(function(require, module, exports) {
    ${fileContent}
  })`;
  
  // 把这个字符串跑起来
  const scripts = new Script(wrappedFileContent, {
    filename: 'index.js'
  });
  
  const module = {
    exports = {}
  }
  
  // 在当下的环境中运行
  const res = script.runInThisContext();
  res(my_require, module, module.exports);
  return module.exports;
}

global.my_require = my_require;
my_require('./index.js')
```
