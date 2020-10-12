export const deleteSession = (_id) => {
  return {
    type: "DeleteSession",
    _id: _id,
  };
};

export const editSession = (_id, newSession) => {
  return {
    type: "EditSession",
    _id: _id,
    newSession: newSession,
  };
};

export const loadSessions = (sessions) => {
  return {
    type: "LoadSessions",
    sessions: sessions,
  };
};

export const errorMessage = (errorMessage) => {
  return {
    type: "Error",
    errorMessage: errorMessage,
  };
};

export const loading = (message) => {
  return {
    type: "Loading",
    loadingMessage: message,
  };
};
