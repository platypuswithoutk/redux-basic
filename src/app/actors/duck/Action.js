import types from './Types';

const add = item => ({
    type: types.ADD_ACTOR, item
})

const reset = item => ({
    type: types.RESET_ACTOR, item
})

export default {
    add,
    reset
}