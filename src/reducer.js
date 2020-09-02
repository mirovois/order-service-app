export const initialState = {
  basket: [],
};

export const calculateSubtotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      // Removing item from basket
      // Take a copy pf the basket
      let temp = [...state.basket];

      //
      const index = state.basket.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        // if item exits, remove from basket
        temp.splice(index, 1);
      } else {
        console.log("Item is not in the basket");
      }
      return { ...state, basket: temp };
    default:
      return state;
  }
}
export default reducer;
