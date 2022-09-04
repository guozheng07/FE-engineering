const { SyncHook } = require('tapable');

const hook = new SyncHook(['arg1', 'arg2', 'arg3']);

hook.tap('plugin1', (arg1, arg2, arg3) => {
  console.log('p1', arg1, arg2, arg3);
});

hook.tap('plugin2', (arg1, arg2, arg3) => {
  console.log('p2', arg1, arg2, arg3);
});

hook.call('1', '2', '3');

const webpack = {
  compiler: {
    hooks: {
      make: new SyncHook(),
      seal: new SyncHook(),
      compile: new SyncHook(),,
      emit: new SyncHook(),
      afterEmit: new SyncHook(),
    }
  },
  compilation: {
    
  }
}

class PluginA {
  apply(compiler) {
    compiler.hooks.emit.tap('plugin1', () => {

    })
  }
}
