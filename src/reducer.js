export const initialState = {
  basket: [],
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
      break;
    case "ADD_TO_BASKET":
      return { state };
      break;
    default:
      return state;
  }
}
export default reducer;
