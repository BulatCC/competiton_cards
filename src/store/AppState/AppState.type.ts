import {CardType} from "../../types/card.type";

export interface InitialAppState {
    cardsData: CardType[];
}

export interface AppState {
    appState: InitialAppState;
}
