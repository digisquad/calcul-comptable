// @ts-ignore

/** @type {import("../utils/perf/filesize/filesize.js").FileSizeCheckerConfig} */
const config = {
  directoriesRelativePaths: [
    "components/common/assets/img",
    "components/common/assets/svg",
    "public",
    "out",
    ".next/static/media",
  ],
  maxFileSizeInBytes: 50000,
  includeGlobPatterns: ["*"],
  excludeGlobPatterns: [],
}

module.exports = config
