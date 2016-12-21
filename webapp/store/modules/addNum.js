import * as types from '../mutation-type.js';
const state = {
        clickNum: []
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
        return state.data;
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