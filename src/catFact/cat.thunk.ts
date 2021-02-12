import * as actions from "./cat.actions";
import { getCatFacts } from "../api/catFactsRequests";
export const fetchItems = () => {
  return async function Thunk(dispatch: any) {
    try {
      dispatch(actions.FetchingItemStart());
      const items = await getCatFacts();
      dispatch(actions.FetchingItemSuccess(items));
    } catch (err) {
      dispatch(actions.FetchingItemError());
      throw new Error(err);
    }
  };
};
