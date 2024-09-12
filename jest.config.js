/** @type {import('ts-jest').JestConfigWithTsJest} **/

const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

export default {
  preset: "ts-jest",
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths ?? {}),
  testEnvironment: "jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
    ".+\\.(css|less|sass|scss|png|jpg|gif|ttf|woff|woff2|svg|webp)$":
      "jest-transform-stub",
  },
};