import { createSlice } from '@reduxjs/toolkit';
import { InitialAppState, AppState } from './AppState.type';
import {CardType} from "../../types/card.type";
import {AppDispatch} from "../CreateStore";
import {getCardsData} from "../../services/api/mockData";

const initialState: InitialAppState = {
    cardsData: []
};

const AppStateSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        setCards: (state, action) => {
            state.cardsData = action.payload;
        },
        updateCard: (state, action) => {
            const index = state.cardsData.findIndex(({_id}) => _id === action.payload);
            state.cardsData[index].isParticipant = true;
        }
    }
});

export const { reducer, actions } = AppStateSlice;
export const {
    updateCard,
    setCards
} = actions;
export const getCards = () => (state: AppState): CardType[] => state.appState.cardsData;
export const loadCards = () => async (dispatch: AppDispatch): Promise<void> => {
    await getCardsData()
        .then(cardsData => dispatch(setCards(cardsData)))
        .catch((error) => console.log(error));
};
