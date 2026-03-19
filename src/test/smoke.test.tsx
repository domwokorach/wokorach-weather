import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { Button } from "@/components/ui/button";

describe("smoke", () => {
  it("renders Button", () => {
    const { getByRole } = render(<Button>Click</Button>);
    expect(getByRole("button", { name: "Click" })).toBeInTheDocument();
  });
});
