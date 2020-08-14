import { waitFor } from "@testing-library/react-native";

// Enabling mock timers breaks `waitFor` in the second test below
// jest.useFakeTimers();

// Replacing the above with "modern" timers causes all three tests to fail
jest.useFakeTimers("modern");

test("it successfully runs tests", () => {
  expect(true).toBeTruthy();
});

test("it successfully uses waitFor", async () => {
  await waitFor(() => {
    expect(true).toBeTruthy();
  });
});

test("it successfully uses waitFor with real timers", async () => {
  // Manually enabling real timers makes `waitFor` work, but this isn't
  // applicable in a test where you'd like to pair `waitFor` with fake timers.
  jest.useRealTimers();
  await waitFor(() => {
    expect(true).toBeTruthy();
  });
});
