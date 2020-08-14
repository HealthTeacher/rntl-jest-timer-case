# rntl-jest-timer-case

Test case for pairing `@testing-library/react-native`'s `waitFor` with [Jest's fake timers](https://jestjs.io/docs/en/timer-mocks). Relying upon mock timers causes `waitFor` to no longer function. This prevents one from using both mock timers and `waitFor` within the same test.
