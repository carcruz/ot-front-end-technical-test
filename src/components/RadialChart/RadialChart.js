import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

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
 * Responsive Radial chart HOC component
 *
 * @param {{data: array, CustomizedXAxisTick: JSX.Element, children: JSX.Element }} props
 */
const RadialChart = ({ data, children, CustomTick = null }) => {
  return (
    <ChartContainer>
      <ResponsiveContainer>
        <RadarChart data={data}>
          <PolarGrid gridType="circle" />
          <PolarAngleAxis
            dataKey="name"
            tick={CustomTick ? <CustomTick /> : null}
          />
          <PolarRadiusAxis />
          {children}
        </RadarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

// TYPES
RadialChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number,
    })
  ),
  children: PropTypes.element,
};

export default RadialChart;
