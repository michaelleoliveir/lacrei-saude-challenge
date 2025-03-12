import '@testing-library/jest-dom';

const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
};

module.exports = createJestConfig(customJestConfig);
