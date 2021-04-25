module.exports = {
  transform: { "^.+\\.[tj]sx?$": "<rootDir>/test/jest-preprocess.js" },

  moduleNameMapper: {
    ".+\\.(svg|jpg|jpeg|png|webp|woff|woff2|mp4|webm|mp3|css)$": "<rootDir>/__mocks__/file-mock.js",
    "@test-utils": "<rootDir>/test/test-utils.tsx",
    "@/(.*)": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: ["<rootDir>/test/loadershim.js"],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  setupFilesAfterEnv: ["<rootDir>/test/setup-test-env.js"],

  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.{tsx,ts,js}",
    "<rootDir>/src/images/**/*.{png,svg,jpg,jpeg}",
    "<rootDir>/src/utils/*.{tsx,ts,js}",
  ],
}
