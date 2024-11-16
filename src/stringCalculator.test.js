import { add } from "./stringCalculator";

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number itself for a single number", () => {
    expect(add("5")).toBe(5);
  });

  test("should return the sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test("should handle newlines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("should support custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("should throw an error for negative numbers", () => {
    expect(() => add("1,-2,3")).toThrow("Negatives not allowed: -2");
  });

  test("should ignore numbers greater than 1000", () => {
    expect(add("2,1001")).toBe(2);
  });

  test("should handle custom delimiters with special characters", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });
});
