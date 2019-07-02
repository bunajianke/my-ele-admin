const state = {
    visitedViews: [],
    cachedViews: []
}

const mutations = {
    ADD_VISITED_VIEW: (state, view) => {
        // some 返回符合回调函数逻辑的结果，如果符合则返回 true 否则为 else
        if(state.visitedViews.some(item => item.path === view.path)) return;        
        state.visitedViews.push(
            Object.assign({}, view, {
                title: view.meta.title || 'no-name'
            })
        )
    },
    ADD_CACHED_VIEW: (state, view) => {
        if(state.cachedViews.includes(view.name)) return;
        if(!view.meta.naCache) {
            state.cachedViews.push(view.name)
        }
    },

    DEL_VISITED_VIEW: (state, view) => {
        // entries() 返回数组的可迭代对象，包含数组的键值对
        for(const [i, v] of state.visitedViews.entries()) {
            if(v.path === view.path) {
                state.visitedViews.splice(i, 1)
                break
            }
        }
    },
    DEL_CACHED_VIEW: (state, view) => {
        for(const i of state.cachedViews) {
            if(i === view.name) {
                const index = state.cachedViews.indexOf(i)
                state.cachedViews.splice(index, 1)
                break
            }
        }
    },
    DEL_ALL_VISITED_VIEWS: (state) => {
        const affixTags = state.visitedViews.filter(tag => tag.meta.affix)
        state.visitedViews = affixTags
    },
    DEL_ALL_CACHED_VIEWS: (state) => {
        state.cachedViews = []
    }
}

const actions = {
    addVisitedView({ commit }, view) {
        commit('ADD_VISITED_VIEW', view)
    },
    addCachedView({ commit }, view) {
        commit('ADD_CACHED_VIEW', view)
    },
    addView({ dispatch }, view) {
        dispatch('addVisitedView', view)
        dispatch('addCachedView', view)
    },
    deleteView({ dispatch }, view) {
        return new Promise(resolve => {
            dispatch("deleteVisitedViews", view);
            dispatch("deleteCachedViews", view);
            resolve({
                visitedViews: [...state.visitedViews],
                cachedViews: [...state.cachedViews]
            })
        })
    },
    deleteVisitedViews({ commit, state}, view) {
        return new Promise(resolve => {
            commit("DEL_VISITED_VIEW", view);
            resolve([...state.visitedViews])
        })
    },
    deleteCachedViews({ commit, state }, view) {
        return new Promise(resolve => {
            commit("DEL_CACHED_VIEW", view);
            resolve([...state.cachedViews])
        })
    },
    deleteAllViews({ dispatch, state }, view) {
        return new Promise(resolve => {
            dispatch("deleteAllVisitedViews", view);
            dispatch("deleteAllCachedViews", view);
            resolve({
                visitedViews: [...state.visitedViews],
                cachedViews: [...state.cachedViews]
            })
        })
    },
    deleteAllVisitedViews({ commit, state }, view) {
        return new Promise(resolve => {
            commit("DEL_ALL_VISITED_VIEWS", view);
            resolve([...state.visitedViews])
        })
    },
    deleteAllCachedViews({ commit, state }, view) {
        return new Promise(resolve => {
            commit("DEL_ALL_CACHED_VIEWS", view);
            resolve([...state.cachedViews])
        })
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}