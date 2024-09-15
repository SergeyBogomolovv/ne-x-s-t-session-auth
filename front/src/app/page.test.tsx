import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Page from "./page";

test("Page", () => {
  const { getByTestId } = render(<Page />);
  const button = getByTestId("btn");
  expect(button).toBeInTheDocument();
});
