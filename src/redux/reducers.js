
function loggedUser(state = {}, action) {
  switch (action.type) {
    case "LOGGED_USER":
      return action.payload;
  }
  return state;
}


export {
loggedUser

};
