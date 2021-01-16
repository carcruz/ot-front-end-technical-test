import React, { Fragment, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { useTable, useExpanded } from "react-table";
import styled from "styled-components";
import { IoCaretForwardOutline, IoCaretDownOutline } from "react-icons/io5";

// ------------------------------------------
// STYLED COMPONENTS
// ------------------------------------------
const Container = styled.div`
  display: block;
  max-width: 100%;
  padding: 1rem;
  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    border-bottom: 1px solid black;
  }
  table {
    width: 100%;
    border-spacing: 0;
    thead {
      font-family: "Roboto";
    }
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 1.5em 0.5rem;
      border-bottom: 1px solid #e7e9ec;
      border-right: 1px solid #e7e9ec;
      :last-child {
        border-right: 0;
      }
    }
  }
`;
const TableRow = styled.tr`
  background-color: ${(props) => (props.even ? " #fff" : "#F5F7F9")};
`;

// ------------------------------------------
// COMPONENTS
// ------------------------------------------
/**
 * React table component
 * @description based react-query table
 * @see https://react-table.tanstack.com/docs/overview
 * @param {{data: array, columns: array, renderRowSubComponent: function}} props
 */
function Table({ columns, data, renderRowSubComponent }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = useTable(
    {
      columns,
      data,
    },
    useExpanded
  );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          const { key } = row.getRowProps();
          return (
            <Fragment key={key}>
              <TableRow even={i % 2 === 0}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </TableRow>
              {row.isExpanded ? (
                <tr>
                  <td colSpan={visibleColumns.length}>
                    {renderRowSubComponent({ row })}
                  </td>
                </tr>
              ) : null}
            </Fragment>
          );
        })}
      </tbody>
    </table>
  );
}

// TYPES
Table.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  renderRowSubComponent: PropTypes.func,
};

/**
 * Table component
 * @description Table component that wraps a based react-query table
 * @param {{data: array, columns: array, rowSubContent: JSX.Element}} props
 */
function TableWrapper({ data, columns, rowSubContent }) {
  const renderRowSubComponent = useCallback(rowSubContent, []);

  const tableColumns = useMemo(
    () => [
      {
        Header: () => null,
        id: "id",
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? (
              <IoCaretDownOutline fontSize={20} />
            ) : (
              <IoCaretForwardOutline fontSize={20} />
            )}
          </span>
        ),
      },
      ...columns,
    ],
    [columns]
  );

  return (
    <Container>
      <Table
        columns={renderRowSubComponent ? tableColumns : columns}
        data={data}
        renderRowSubComponent={renderRowSubComponent}
      />
    </Container>
  );
}

// TYPES
TableWrapper.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  rowSubContent: PropTypes.func,
};

export default TableWrapper;
