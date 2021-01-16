import React from "react";

import Loader from './Loader'

export default {
  component: Loader,
  title: "Components/Loader",
};

const Template = (args) => <div {...args}>
  <Loader />
</div>;

export const Default = Template.bind({});

Default.args = {
};
