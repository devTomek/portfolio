const nextJest = require('next/jest.js');

const config = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coverageProvider: 'v8',
};

const createJestConfig = nextJest({
  dir: './',
});

module.exports = createJestConfig(config);
