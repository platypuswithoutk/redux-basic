import types from './types';

const add = item => ({
    type: types.ADD_MOVIE, item
})

const reset = item => ({
    type: types.RESET_MOVIE, item
})

export default {
    add,
    reset
}