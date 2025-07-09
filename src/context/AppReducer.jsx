// const AppReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_ARTICLES":
//       return {
//         ...state,
//         articles: action.payload,
//         loading: false,
//         error: null,
//       };
//     case "ADD_ARTICLE":
//       return {
//         ...state,
//         article: [...state.articles, action.payload],
//       };

//     default:
//       return state;
//   }
// };

// export default AppReducer;

const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_ARTICLES":
      return {
        ...state,
        apiArticles: action.payload,
        // We merge saved + API articles
        asticles: [...state.userArticles, ...action.payload],
        loading: false,
        error: null,
      };

    case "ADD_ARTICLE": {
      const newUserArticles = [action.payload, ...state.userArticles];
      localStorage.setItem("userArticles", JSON.stringify(newUserArticles));
      return {
        ...state,
        userArticles: newUserArticles,
        articles: [...newUserArticles, ...state.apiArticles],
      };
    }

    case "FETCH_START":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default AppReducer;
