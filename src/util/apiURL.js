export const apiURL = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3001";
  } else if (process.env.NODE_ENV === "production") {
    return "https://peaceful-cliffs-68239.herokuapp.com/";
  }
};
