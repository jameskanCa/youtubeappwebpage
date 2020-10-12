import { combineReducers } from "redux";

const sessionsReducer = (
  obj = {
    sessions: [],
    userId: "113340512880134517454",
    loadError: false,
    errorMessage: "",
    actionSuccess: false,
    successMessage: "",
    isLoading: false,
    loadingMessage: "",
  },
  action
) => {
  if (action.type === "LoadSessions") {
    return {
      sessions: action.sessions.session,
      userId: obj.userId,
      loadError: false,
      errorMessage: "",
      actionSuccess: true,
      successMessage: "Successfuly Loaded sessions",
      isLoading: false,
      loadingMessage: "",
    };
  } else if (action.type === "DeleteSession") {
    return {
      sessions: obj.sessions.filter((session) => session._id !== action._id),
      userId: obj.userId,
      loadError: false,
      errorMessage: "",
      actionSuccess: true,
      successMessage: "Successfuly deleted session",
      isLoading: false,
      loadingMessage: "",
    };
  } else if (action.type === "EditSession") {
    return {
      sessions: obj.sessions.map((incomingMessage) => {
        if (incomingMessage._id === action._id) {
          return { ...incomingMessage, message: action.newMessage };
        }
        return incomingMessage;
      }),
      userId: obj.userId,
      loadError: false,
      errorMessage: "",
      actionSuccess: true,
      successMessage: "Successfuly edited message",
      isLoading: false,
      loadingMessage: "",
    };
  } else if (action.type === "Error") {
    return {
      sessions: obj.sessions,
      userId: obj.userId,
      loadError: true,
      errorMessage: action.errorMessage,
      actionSuccess: false,
      successMessage: "",
      isLoading: false,
      loadingMessage: "",
    };
  } else if (action.type === "Loading") {
    return {
      sessions: obj.sessions,
      userId: obj.userId,
      loadError: obj.loadError,
      errorMessage: obj.errorMessage,
      actionSuccess: obj.actionSuccess,
      successMessage: obj.successMessage,
      isLoading: true,
      loadingMessage: action.loadingMessage,
    };
  }
  return {
    sessions: obj.sessions,
    userId: obj.userId,
    loadError: false,
    errorMessage: "",
    actionSuccess: false,
    successMessage: "",
    isLoading: false,
    loadingMessage: "",
  };
};

export default combineReducers({
  sessions: sessionsReducer,
});
