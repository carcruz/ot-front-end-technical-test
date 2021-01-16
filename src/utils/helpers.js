/**
 * @description helper function to use with <Array.sort()> to sort genes descending by association_score.overall
 */
export function assocScoreSortDescending(a, b) {
  if (a.association_score.overall < b.association_score.overall) {
    return 1;
  }
  if (a.association_score.overall > b.association_score.overall) {
    return -1;
  }
  return 0;
}

export const dataSourcesLabels = {
  genetic_association: {
    label: "Genetic association",
    url: "https://docs.targetvalidation.org/data-sources/genetic-associations",
  },
  somatic_mutation: {
    label: "Somatic mutation",
    url: "https://docs.targetvalidation.org/data-sources/somatic-mutations",
  },
  known_drug: {
    label: "Known drug",
    url: "https://docs.targetvalidation.org/data-sources/drugs",
  },
  animal_model: {
    label: "Animal model",
    url: "https://docs.targetvalidation.org/data-sources/animal-models",
  },
  affected_pathway: {
    label: "Affected pathway",
    url: "https://docs.targetvalidation.org/data-sources/affected-pathways",
  },
  literature: {
    label: "Literature",
    url: "https://docs.targetvalidation.org/data-sources/text-mining",
  },
  rna_expression: {
    label: "RNA expression",
    url: "https://docs.targetvalidation.org/data-sources/rna-expression",
  },
};
