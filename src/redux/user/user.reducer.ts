import { UserActionType } from "./user.actions";

const INITIAL_STATE = {
  currentUser: null,
};

// as per JS/ES6 default not applied for NULL, just when undefined
const userReducer = (
  state = INITIAL_STATE,
  action: { type: UserActionType; payload: any }
) => {
  switch (action.type) {
    case UserActionType.SET_CURRENT_USER:
      return {
        ...state, // spread in all bits of state (don't want to lose/change state not related to action care about)
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
