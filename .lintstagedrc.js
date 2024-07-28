// @ts-nocheck
const path = require("path");

// from: https://nextjs.org/docs/pages/building-your-application/configuring/eslint#lint-staged
const buildEslintCommand = (filenames) =>
  `pnpm lint:fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;

// const buildPrettierCommand = (filenames) => `pnpm prettier-staged --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --write ")}`

// const buildCheckFileSizeCommand = () => 'pnpm check-filesize'

// const buildKnipCommand = (filenames) => `pnpm knip --include ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --include ")}` 


module.exports = {
  // default ESLint extensions, to be in sync with the pipeline command
  "*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}": [buildEslintCommand],
};
