import { render } from "@testing-library/react";
import Card from "../Card";

describe("Card", () => {
  it("should render without crashing", () => {
    const { getByText } = render(<Card>Card</Card>);
    expect(getByText("Card")).toBeInTheDocument();
  });
  it("should render with className", () => {
    const { getByText } = render(<Card className="text-primary-500">Card</Card>);
    expect(getByText("Card")).toHaveClass("text-primary-500");
  });
});