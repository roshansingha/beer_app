export const initialState = {
  favorite: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_FAVORITE":
      //logic to add
      return { ...state, favorite: [...state.favorite, action.item] };
    case "REMOVE_FROM_FAVORITE":
      //logic to remove
      let newFavorite = [...state.favorite];
      const index = state.favorite.findIndex(
        (favoriteItem) => favoriteItem.id === action.id
      );
      if (index >= 0) {
        newFavorite.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it is not in the cart.`
        );
      }
      return { ...state, favorite: newFavorite };
    default:
      return state;
  }
};

export default reducer;
