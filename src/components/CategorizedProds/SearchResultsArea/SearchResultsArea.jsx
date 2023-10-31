import { useSelector } from "react-redux";
import styled from "styled-components";

const SEARCH_RESULTS_AREA = styled.div`
  width: 100%;
  height: 2.375rem;
  // h38px
  border-bottom: 1px solid #cccccc;
  box-shadow: 0px 5px 4px -3px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  font-size: 14px;
  & span {
    line-height: 2.375rem;
    /* lh 38px */
    padding-left: 1rem;
    /* pl 16px */
    padding-right: 0.3rem;
  }
`;

const SearchResultsArea = () => {
  const productsByCategory = useSelector(
    (state) => state.products.productsByCategory
  );

  return (
    <SEARCH_RESULTS_AREA>
      <span>Products found:</span>
      {productsByCategory.length}
    </SEARCH_RESULTS_AREA>
  );
};

export default SearchResultsArea;
