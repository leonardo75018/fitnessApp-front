export const initialState = {
  userName: "",
  programme: [],
  seances: [],

};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "setUserName":
      return { ...state, userName: action.payload.userName, userName: action.payload.userName };
      break;
    default:
      return state;
  }
}