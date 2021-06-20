export const apiURL = () => {
  if (process.env.NODE_ENV === "development") {
    return "https://peaceful-cliffs-68239.herokuapp.com/";
  }
  return "";
};
