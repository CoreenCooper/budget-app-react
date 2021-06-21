export const apiURL = () => {
  return process.env.NODE_ENV === "production"
    ? "https://peaceful-cliffs-68239.herokuapp.com"
    : "http://localhost:3001";
};