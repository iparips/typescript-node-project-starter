module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: "(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  coverageDirectory: "reports/coverage"
};