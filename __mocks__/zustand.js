import { act } from "react-dom/test-utils";
import { beforeEach, vi } from "vitest";
const { create: actualCreate } = await vi.importActual("zustand");

// a variable to hold reset functions for all stores declared in the app
const storeResetFns = new Set();

// when creating a store, we get its initial state, create a rest functionand add it
export const create = (createState) => {
  const store = actualCreate(createState);
  const initialState = store.getState();
  storeResetFns.add(() => store.setState(initialState, true));
  return store;
};

// Reset all stores after each test run
beforeEach(() => {
  act(() => storeResetFns.forEach((resetFn) => resetFn()));
});
