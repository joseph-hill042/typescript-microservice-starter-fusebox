const { FuseBox } = require('fuse-box')
const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'dist/$name.js',
})

fuse.dev({ port: 4445, httpServer: false })

fuse
  .bundle('app')
  .watch()
  .instructions(' > [index.ts]')
  .completed(proc => proc.start())
fuse.run()
