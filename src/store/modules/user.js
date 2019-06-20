const state = {
    token: 123,
    name: '',
    roles: []
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    }
}

const actions = {
    setToken({commit}, token) {
        commit("SET_TOKEN"), token;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}