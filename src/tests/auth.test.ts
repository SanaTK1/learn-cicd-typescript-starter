import { expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

test("not included", () => {
  expect(getAPIKey({})).toBeNull();
});

test("is empty", () => {
  expect(getAPIKey({ authorization: "" })).toBeNull();
});
