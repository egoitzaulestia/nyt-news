const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_ARTICLES":
      return {
        ...state,
        articles: action.payload,
      };
    case "ADD_TASK":
      return {
        ...state,
        article: [...state.articles, action.payload],
      };

    default:
      return state;
  }
};

export default AppReducer;
