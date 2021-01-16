import React from "react";
import PropTypes from "prop-types";
import {
  BarChart as BarChartComp,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

// ------------------------------------------
// STYLED COMPONENTS
// ------------------------------------------
const ChartContainer = styled.div`
  height: 400px;
  width: 100%;
`;

// ------------------------------------------
// COMPONENTS
// ------------------------------------------
/**
 * Responsive Bar chart HOC component
 *
 * @param {{data: array, CustomizedXAxisTick: JSX.Element, children: JSX.Element }} props
 */
function BarChart({
  data = null,
  CustomizedXAxisTick = null,
  children,
  yAxisLabel = "",
  xAxisLabel = "",
}) {
  return (
    <ChartContainer>
      <ResponsiveContainer>
        <BarChartComp
          data={data}
          margin={{ top: 35, right: 50, left: 20, bottom: 55 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={0}
            tick={CustomizedXAxisTick ? <CustomizedXAxisTick /> : null}
            label={{ value: xAxisLabel, position: "insideLeft" }}
          />
          <YAxis
            label={{ value: yAxisLabel, angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          {children}
        </BarChartComp>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

// TYPES
BarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number,
    })
  ),
  CustomizedXAxisTick: PropTypes.func,
  children: PropTypes.element,
};

export default BarChart;
