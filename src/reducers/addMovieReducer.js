export const addMovieReducer = (state = [], action) => {
 switch (action.type) {
   case 'ADD_MOVIEDATA':
     return [...action.payload]
   default:
   return state;
 }
};
