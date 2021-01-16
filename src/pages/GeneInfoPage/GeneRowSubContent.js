import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import BarChart, { Bar } from "../../components/BarChart";
import RadialChart, { Radar } from "../../components/RadialChart";
import { dataSourcesLabels } from "../../utils/helpers";

// ------------------------------------------
// HELPERS
// ------------------------------------------
const selectChartsData = (data) =>
  Object.keys(data).map((type) => ({
    name: type,
    value: data[type],
  }));

// ------------------------------------------
// STYLED COMPONENTS
// ------------------------------------------
const Container = styled.div`
  display: flex;
  width: 100%;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ChartHeader = styled.h3``;

const Column = styled.div`
  width: 50%;
  @media only screen and (max-width: 1024px) {
    width: 99%;
  }
  :first-child {
    padding-right: 0.25rem;
  }
  :last-child {
    padding-left: 0.25rem;
  }
`;

// ------------------------------------------
// COMPONENTS
// ------------------------------------------
/**
 * BarChart XAxis Tick
 * @description Custom clickable x-axis label for the Bar chart compoment
 * @param {{x: number, y: number, payload: {}}} props
 */
function BarChartXAxisTick({ x, y, payload: { value } }) {
  const { url, label } = dataSourcesLabels[value];
  return (
    <g transform={`translate(${x},${y})`}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
          fontSize={11}
          href="/"
        >
          {label}
        </text>
      </a>
    </g>
  );
}

// TYPE
BarChartXAxisTick.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.shape({
    value: PropTypes.string,
    type: PropTypes.string,
  }),
};

/**
 * Tick
 * @description Custom clickable label for the Radial chart compoment
 * @param {{x: number, y: number, payload: {}}} props
 */
function RadialChartTick({ x, y, payload: { value } }) {
  const { url, label } = dataSourcesLabels[value];
  return (
    <g transform={`translate(${x},${y})`}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <text
          x={0}
          y={0}
          textAnchor="end"
          fill="#666"
          fontSize={11}
          href="/"
        >
          {label}
        </text>
      </a>
    </g>
  );
}

// TYPE
BarChartXAxisTick.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.shape({
    value: PropTypes.string,
    type: PropTypes.string,
  }),
};

/**
 * Gene Row SubContent
 * @description subcontent compomponent that is displayed when a row is change its state to *expanded*
 * @param {{x: number, y: number, payload: {}}} props
 */
function GeneRowSubContent({ row: { original: associatedGene } }) {
  const {
    association_score: { datatypes },
  } = associatedGene;
  const chartData = selectChartsData(datatypes);
  return (
    <Container>
      <Column>
        <ChartHeader>Association Score vs Data Type</ChartHeader>
        <BarChart
          data={chartData}
          CustomizedXAxisTick={BarChartXAxisTick}
          dataColor="#66c2a5"
          yAxisLabel="Score"
        >
          <Bar dataKey="value" fill="#66c2a5" />
        </BarChart>
      </Column>
      <Column>
        <ChartHeader>Association Score vs Data Type</ChartHeader>

        <RadialChart
          data={chartData}
          dataColor="#66c2a5"
          CustomTick={RadialChartTick}
        >
          <Radar
            dot
            dataKey="value"
            stroke="#66c2a5"
            strokeWidth="3px"
            fill="none"
            fillOpacity={0.6}
          />
        </RadialChart>
      </Column>
    </Container>
  );
}

// TYPES
GeneRowSubContent.propTypes = {
  row: PropTypes.object,
};

export default GeneRowSubContent;
