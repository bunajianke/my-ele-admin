import { login, getUserInfo } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";

const state = {
  token: getToken(),
  name: "",
  avatar: "",
  introduction: "",
  roles: []
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  }
};

const actions = {
  userLogin({ commit }, info) {
    return new Promise((resolve, reject) => {
      login(info).then(res => {
        resolve(res);
        if (res.code === "0000") {
          commit("SET_TOKEN", res.data.token);
          setToken(res.data.token);
        }
      });
    });
  },
  userInfo({commit}, state) {
    return new Promise((resolve, reject) => {
        getUserInfo().then(res => {
            resolve(res)
            if(res.code === '0000') {
                
            }
        });
    })
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
