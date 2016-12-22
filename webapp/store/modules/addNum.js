import * as types from '../mutation-type.js';
const state = {
        clickNum: [],
        d: ''
    }
    // actions
const actions = {
    checkout({
        commit,
        state
    }) {
        commit(types.CHECKOUT_REQUEST)
    }
}

// mutations
const mutations = {
    [types.CHECKOUT_REQUEST](state) {
        state.d = 1;
        console.log(state.d);
        return state.d;

    },
    [types.ADD_INFO](state, {
        txt
    }) {
        state.clickNum.push(txt);
        console.log(txt);
    }
}

export
default {
    state,
    actions,
    mutations
}