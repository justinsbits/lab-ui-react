export enum UserActionType {
  SET_CURRENT_USER = "SET_CURRENT_USER",
}
export const setCurrentUser = (user: string) => ({
  type: UserActionType.SET_CURRENT_USER,
  payload: user,
});
