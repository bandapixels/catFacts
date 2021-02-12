import { CatFact } from "../shared/interfaces/catFact";

export interface InitialCatState {
    isLoading: boolean;
    isError: boolean;
    items: Array<CatFact>;
}
