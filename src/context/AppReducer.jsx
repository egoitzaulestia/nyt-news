const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_ARTICLES":
      return {
        ...state,
        apiArticle: action.payload,
        asticles: [...state.userArticles, ...action.payload],
        loading: false,
        error: null,
      };

    case "ADD_ARTICLE":
      return {
        ...state,
        article: [...state.articles, action.payload],
      };

    default:
      return state;
  }
};

export default AppReducer;
