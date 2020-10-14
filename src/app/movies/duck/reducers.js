import types from './types';

const INITIAL_STATE = {
    listName: 'favorite movies',
    list: [
      'Harry Potter',
      'Władca pierścieni',
      'A więc wojna',
      'Poznaj moich Spartan'
    ]
  }


  const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_MOVIES:
            return {
            ...state, list: [...state.list, action.item]
            }
        case types.RESET_MOVIES:
        return {
            ...state, list: []
        }
        default:
            return state
        }
  }

  export default moviesReducer;