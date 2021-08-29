import React from "react";
import { render, screen } from "@testing-library/react";
import OrderBookSideTable from "..";
import { Sides } from "../OrderBookSideTable";

describe("OrderBookSideTable", () => {
  it("SHOULD hide the table header WHEN hideHeader prop is passed", () => {
    console.log(Sides.ASKS_SELL);
    const { unmount } = render(<OrderBookSideTable hideHeader />);
    expect(screen.queryByRole("rowheader")).toBeNull();
    unmount();

    render(<OrderBookSideTable />);
    expect(screen.queryByRole("rowheader")).not.toBeNull();
  });

  it("SHOULD change column order depending on side WHEN side prop is passed", () => {
    const { unmount } = render(<OrderBookSideTable />);
    expect(
      screen.queryAllByRole("columnheader").map((item) => item.textContent)
    ).toEqual(["TOTAL", "SIZE", "PRICE"]);
    unmount();

    render(<OrderBookSideTable side={Sides.ASKS_SELL} />);
    expect(
      screen.queryAllByRole("columnheader").map((item) => item.textContent)
    ).toEqual(["PRICE", "SIZE", "TOTAL"]);
    unmount();
  });
});
