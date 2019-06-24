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
        let accessRoutes;
        return new Promise(resolve => {
            if(roles.includes('admin')) {
                commit("SET_ROUTES", asyncRoutes);
                accessRoutes = asyncRoutes || [] 
            }

            resolve(accessRoutes)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}