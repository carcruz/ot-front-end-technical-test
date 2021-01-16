import { get } from "axios";
import { useQuery } from "react-query";
import { assocScoreSortDescending } from "../utils/helpers";

/**
 * @type {string}
 * @description Base query URL for associated genes request
 */
const QUERY_URL = "https://demo6922545.mockable.io";

/**
 * useAssociatedGenes - Hook
 * @description hook to request genes data
 * @type {Function}
 * @returns {{status:boolean, data:object, error:object, isFetching:boolean}}
 */
export function useAssociatedGenes() {
  return useQuery("associatedGenes", async () => {
    const {
      data: { data },
    } = await get(QUERY_URL);
    // sort data descending by associationScore.overall
    const sortedData = data.sort(assocScoreSortDescending);
    // filter data length to max 5
    const filteredData = sortedData.slice(0, 5);
    return filteredData;
  }, { refetchOnWindowFocus: false, staleTime: Infinity });
}
