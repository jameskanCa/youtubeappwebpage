export const baseUrl = () =>
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://youtube-reminder-server.herokuapp.com";
