import {CatFact} from "../shared/interfaces/catFact";

export enum AppActions {
    FETCHING_ITEMS_START = "FETCHING_ITEMS_START",
    FETCHING_ITEMS_SUCCESS = "FETCHING_ITEMS_SUCCESS",
    FETCHING_ITEMS_ERROR = "FETCHING_ITEMS_ERROR",
    REMOVE_CURRENT_ITEM = "REMOVE_CURRENT_ITEM",
}

export interface FetchingItemsStart {
    type: typeof AppActions.FETCHING_ITEMS_START;
}

export interface FetchingItemSuccess {
    type: typeof AppActions.FETCHING_ITEMS_SUCCESS;
    payload: CatFact[];
}

export interface FetchingItemError {
    type: typeof AppActions.FETCHING_ITEMS_ERROR;
}

export interface RemoveCurrentItem {
    type: typeof AppActions.REMOVE_CURRENT_ITEM;
    id: string;
}

export type AppActionsTypes =
    | FetchingItemsStart
    | FetchingItemSuccess
    | FetchingItemError
    | RemoveCurrentItem;
