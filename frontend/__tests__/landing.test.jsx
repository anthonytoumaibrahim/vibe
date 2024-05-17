import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
  it("renders the landing page", () => {
    render(<Home />);

    const landing_hero = screen.getByTestId("landing_hero");

    expect(landing_hero).toBeInTheDocument();
  });
});
