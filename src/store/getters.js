const getters = {
  sidebar: state => state.app.sidebar,
  permission_routes: state => state.permission.routes,
  token: state => state.user.token,
  roles: state => state.user.roles
};

export default getters