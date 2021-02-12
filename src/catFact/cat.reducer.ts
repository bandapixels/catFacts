import {InitialCatState} from "../store/initialState";
import {CatFact} from "../shared/interfaces/catFact";
import * as appTypeActs from './cat.types'

export const InitialState: InitialCatState = {
    isLoading: false,
    isError: false,
    items: [],
};

const fetchingItemsReducer = (state = InitialState, action: appTypeActs.AppActionsTypes): InitialCatState => {
    switch (action.type) {
        case appTypeActs.AppActions.FETCHING_ITEMS_START:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case appTypeActs.AppActions.FETCHING_ITEMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                items: state.items.concat(action.payload),
            };
        case appTypeActs.AppActions.FETCHING_ITEMS_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case appTypeActs.AppActions.REMOVE_CURRENT_ITEM:
            return {
                ...state,
                items: state.items.filter(
                    (item: CatFact) => item._id !== action.id
                ),
            };
        default:
            return state;
    }
};

export default fetchingItemsReducer;
