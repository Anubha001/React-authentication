export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case "ITEMS_HAS_ERRORED":
      return action.hasErrored;
    default:
      return state;
  }
}

export function isLoginSuccess(state = false, action) {
  switch (action.type) {
    case "SET_LOGIN_SUCCESS":
      return action.isLoginSuccess;
    default:
      return state;
  }
}
export function loginError(state = false, action) {
  switch (action.type) {
    case "SET_LOGIN_ERROR":
      return action.loginError;
    default:
      return state;
  }
}
export function isLoginPending(state = false, action) {
  switch (action.type) {
    case "SET_LOGIN_PENDING":
      return action.isLoginPending;
    default:
      return state;
  }
}

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case "ITEMS_IS_LOADING":
      return action.isLoading;
    default:
      return state;
  }
}
export function items(state = [], action) {
  switch (action.type) {
    case "ITEMS_FETCH_DATA_SUCCESS":
      return action.items;
    default:
      return state;
  }
}
