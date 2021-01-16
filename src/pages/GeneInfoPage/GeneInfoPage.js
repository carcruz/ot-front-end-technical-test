import React from "react";
import styled from "styled-components";
import { useAssociatedGenes } from "../../hooks/api";
import AssociatedGenesTable from "./AssociatedGenesTable";
import Loader from "../../components/Loader";

// ------------------------------------------
// STYLED COMPONENTS
// ------------------------------------------
const PageContainer = styled.div`
  max-width: 1280px;
  margin: 75px auto 0;
`;

// ------------------------------------------
// COMPONENTS
// ------------------------------------------
/**
 * Gene info page
 * @description Genes associated with lung carcinoma table page
 */
function GeneInfo() {
  const { status, data, error } = useAssociatedGenes();

  return (
    <PageContainer>
      <h1>Genes associated with lung carcinoma</h1>
      {status === "loading" && <Loader />}
      {status === "error" && <span>Error: {error.message}</span>}
      {status !== "loading" && status !== "error" && (
        <div>
          <AssociatedGenesTable data={data} />
        </div>
      )}
    </PageContainer>
  );
}

export default GeneInfo;
