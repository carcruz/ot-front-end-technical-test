import React from "react";
import Table from "../../components/Table";
import PropTypes from "prop-types";
import GeneRowSubContent from "./GeneRowSubContent";

// ------------------------------------------
// COMPONENTS
// ------------------------------------------
/**
 * Associated Genes Table
 * @param {{data: array}} props pwempowemd
 */
function AssociatedGenesTable({ data }) {
  const columns = [
    { Header: "Symbol", accessor: "target.gene_info.symbol" },
    {
      Header: "Gene ID",
      accessor: "target.id",
    },
    {
      Header: "Gene Name",
      accessor: "target.gene_info.name",
    },
    {
      Header: "Overall Association Score",
      accessor: "association_score.overall",
    },
  ];

  return (
    <Table data={data} columns={columns} rowSubContent={GeneRowSubContent} />
  );
}

// TYPES
AssociatedGenesTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AssociatedGenesTable;
