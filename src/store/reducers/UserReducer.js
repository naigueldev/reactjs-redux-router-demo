const INITIAL_STATE = {
  user: {
    first_name: "",
    email: "",
  },
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "EDIT_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}
