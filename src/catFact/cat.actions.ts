import { CatFact } from "../shared/interfaces/catFact";
import * as appTypeActs from './cat.types'

export const FetchingItemStart = (): appTypeActs.FetchingItemsStart => {
  return {
    type: appTypeActs.AppActions.FETCHING_ITEMS_START,
  };
}

export const FetchingItemSuccess = (items: CatFact[]): appTypeActs.FetchingItemSuccess => {
  return {
    type: appTypeActs.AppActions.FETCHING_ITEMS_SUCCESS,
    payload: items,
  };
}

export const FetchingItemError = (): appTypeActs.FetchingItemError => {
  return {
    type: appTypeActs.AppActions.FETCHING_ITEMS_ERROR,
  };
}

export const RemoveCurrentItem = (id: string): appTypeActs.RemoveCurrentItem => {
  return {
    type: appTypeActs.AppActions.REMOVE_CURRENT_ITEM,
    id,
  };
}
