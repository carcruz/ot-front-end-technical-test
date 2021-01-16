import React from "react";

import BarChart from "./BarChart";
import Bar from './Bar'

export default {
  component: BarChart,
  title: "Bar Chart",
};

const Template = (args) => <BarChart {...args}>
  <Bar dataKey="value" fill="#66c2a5" />
</BarChart>;

export const Default = Template.bind({});

Default.args = {
  data: [
    { name: "apple", value: 8 },
    { name: "orange", value: 4 },
    { name: "cherry", value: 2 },
  ],
};
