import "@testing-library/jest-dom";
import { act, render, screen, waitFor } from "@testing-library/react";
import Character from "../app/(user)/2d_components/Character";

// The Part component dynamically loads SVGs
// Here we are loading mock SVGs for the test
jest.mock("next/dynamic", () => ({
  __esModule: true,
  default: jest.fn(() => {
    return () => <svg data-testid="mocked-svg" />;
  }),
}));

// It also loads the JSON data for each SVG
// So we also load mock JSON for the test
jest.mock(
  "../app/(user)/2d/body/body1.json",
  () => ({ width: 100, height: 100, parts: [] }),
  { virtual: true }
);
jest.mock(
  "../app/(user)/2d/hair/hair1.json",
  () => ({ width: 100, height: 100, parts: [] }),
  { virtual: true }
);
jest.mock(
  "../app/(user)/2d/face/face1.json",
  () => ({ width: 100, height: 100, parts: [] }),
  { virtual: true }
);
jest.mock(
  "../app/(user)/2d/eyebrow/eyebrow1.json",
  () => ({ width: 100, height: 100, parts: [] }),
  { virtual: true }
);
jest.mock(
  "../app/(user)/2d/eye/eye1.json",
  () => ({ width: 100, height: 100, parts: [] }),
  { virtual: true }
);
jest.mock(
  "../app/(user)/2d/nose/nose1.json",
  () => ({ width: 100, height: 100, parts: [] }),
  { virtual: true }
);
jest.mock(
  "../app/(user)/2d/mouth/mouth1.json",
  () => ({ width: 100, height: 100, parts: [] }),
  { virtual: true }
);

describe("Character", () => {
  it("renders the 2D character", async () => {
    act(() => {
      render(<Character />);
    });

    await waitFor(() => {
      expect(screen.getByTestId("character_wrapper")).toBeInTheDocument();
      expect(screen.getAllByTestId("mocked-svg")).toHaveLength(7);
    });
  });
});
