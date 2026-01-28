await Bun.build({
  entrypoints: ['./src/js/app.js'],
  outdir: "dist/js"
});

await Bun.build({
  entrypoints: [
    './src/css/main.css',
  ],
  outdir: "dist/css",
  naming: "[name].[ext]"
});
