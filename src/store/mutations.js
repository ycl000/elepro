export default {
  setToken(state, value) {
    state.token = value;
    window.localStorage.setItem("token", value);
  },
  clearToken(state) {
    state.token = "";
    window.localStorage.removeItem("token");
  }
};
