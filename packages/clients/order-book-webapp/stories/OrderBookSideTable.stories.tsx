import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import OrderBookSideTable from "../modules/orderbook-visualizations/components/OrderBookSideTable";
import { Sides } from "modules/orderbook-visualizations/components/OrderBookSideTable/OrderBookSideTable";

//👇 This default export determines where your story goes in the story list
export default {
  title: "OrderBookSideTable",
  component: OrderBookSideTable,
  argTypes: {
    side: {
      options: ["ASKS_SELL", "BIDS_BUY"],
      control: { type: "radio" },
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof OrderBookSideTable>> = (args) => (
  <OrderBookSideTable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  hideHeader: false,
};
