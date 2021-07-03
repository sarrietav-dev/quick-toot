module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['/node_modules', '/public/'],
  verbose: true,
  coveragePathIgnorePatterns: ['/node_modules'],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  transform: { '\\.[jt]sx?$': 'babel-jest' },
  testMatch: [
    '<rootDir>/app/**/*.test.{js, jsx}',
    '<rootDir>/test/**/*.test.js',
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each',
  ],
};
