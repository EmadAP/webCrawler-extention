const { sortPages } = require("./report.js");
const { test, expect } = require("@jest/globals");

test("sortPages 2 pages", () => {
  const input = {
    "https://www.time.ir/path": 1,
    "https://www.time.ir": 3,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://www.time.ir", 3],
    ["https://www.time.ir/path", 1],
  ];
  expect(actual).toEqual(expected);
});

test("sortPages 5 pages", () => {
  const input = {
    "https://www.time.ir/path": 1,
    "https://www.time.ir": 3,
    "https://www.time.ir/path2": 5,
    "https://www.time.ir/path3": 2,
    "https://www.time.ir/path4": 9,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://www.time.ir/path4", 9],
    ["https://www.time.ir/path2", 5],
    ["https://www.time.ir", 3],
    ["https://www.time.ir/path3", 2],
    ["https://www.time.ir/path", 1],
  ];
  expect(actual).toEqual(expected);
});
