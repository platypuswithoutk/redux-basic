import types from './Types';

const INITIAL_STATE = {
    listName: 'best actors',
    list: [
      'Leonardo DiCaprio',
      'Tom Hardy',
      'Reese Witherspoon',
      'Angelina Jolie',
      'Orlando Bloom'
    ]
  }


  const actorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.ADD_ACTORS:
        return {
          ...state, list: [...state.list, action.item]
        }
      case types.RESET_ACTORS:
      return {
        ...state, list: []
      }
      default:
        return state
    }
  }

  export default actorReducer;