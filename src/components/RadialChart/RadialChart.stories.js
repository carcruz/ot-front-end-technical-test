import React from "react";

import RadialChart from "./RadialChart";
import Radar from "./Radar";

export default {
  component: RadialChart,
  title: "Components/Radial Chart",
};

const Template = (args) => (
  <RadialChart {...args}>
    <Radar
      dot
      dataKey="value"
      stroke="#66c2a5"
      strokeWidth="3px"
      fill="none"
      fillOpacity={0.6}
    />
  </RadialChart>
);

export const Default = Template.bind({});

Default.args = {
  data: [
    { name: "apple", value: 8 },
    { name: "orange", value: 4 },
    { name: "cherry", value: 2 },
  ],
};
