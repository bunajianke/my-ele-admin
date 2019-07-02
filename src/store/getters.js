const getters = {
  sidebar: state => state.app.sidebar,
  permission_routes: state => state.permission.routes,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  roles: state => state.user.roles,
  vistiedViews: state => state.tagview.visitedViews,
  cachedViews: state => state.tagview.cachedViews
};

export default getters