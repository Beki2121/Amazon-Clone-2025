import { type } from "./Action.type"; // Keep this line as is

export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case type.ADD_TO_BASKET:
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );
      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        const updatedBasket = state.basket.map((item) =>
          item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
        return {
          ...state,
          basket: updatedBasket,
        };
      }

    case type.REMOVE_FROM_BASKET:
      const itemToUpdate = state.basket.find((item) => item.id === action.id);

      if (itemToUpdate) {
        if (itemToUpdate.amount > 1) {
          // decrease amount
          const updatedBasket = state.basket.map((item) =>
            item.id === action.id ? { ...item, amount: item.amount - 1 } : item
          );
          return {
            ...state,
            basket: updatedBasket,
          };
        } else {
          // remove item if amount = 1
          return {
            ...state,
            basket: state.basket.filter((item) => item.id !== action.id),
          };
        }
      }
      return state;
        case type.EMPTY_BASKET:
          return{
            ...state,
            basket:[],
          }
    case type.SET_USER: // <--- Changed from Type.SET_USER to type.SET_USER
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
