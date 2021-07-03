module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['/node_modules'],
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 90,
    },
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx,js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coveragePathIgnorePatterns: ['/node_modules'],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
