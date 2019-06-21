import { baseRoutes, asyncRoutes } from "@/router";
const state = {
    routes: [],
    addRoutes: []
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes
        state.routes = baseRoutes.concat(routes)
    }
}

const actions = {
    generateRoutes({ commit }, roles) {
        return new Promise(resolve => {
            if(roles.includes('admin')) {
                commit("SET_ROUTES", asyncRoutes);
            }
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}