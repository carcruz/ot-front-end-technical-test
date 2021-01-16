import React from "react";
import Table from "./Table";

const RowSubContent = () => <div>Expanded content</div>;

const columns = [
  {
    Header: "FRUIT",
    accessor: "name",
  },
  {
    Header: "Count",
    accessor: "value",
  },
];

export default {
  component: Table,
  title: "Components/Table",
};

const Template = (args) => <Table {...args}></Table>;

export const Default = Template.bind({});
Default.args = {
  data: [
    { name: "apple", value: 8 },
    { name: "orange", value: 4 },
    { name: "cherry", value: 2 },
  ],
  columns,
};

export const SubContent = Template.bind({});
SubContent.args = {
  data: [
    { name: "apple", value: 8 },
    { name: "orange", value: 4 },
    { name: "cherry", value: 2 },
  ],
  columns,
  rowSubContent: RowSubContent,
};
