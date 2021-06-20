// export const apiURL = () => {
//   process.env.NODE_ENV === "production"
//     ? "https://peaceful-cliffs-68239.herokuapp.com/"
//     : "http://localhost:3001";
// };

export const apiURL = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://peaceful-cliffs-68239.herokuapp.com/";
  } else if (process.env.NODE_ENV === "development") {
    return "http://localhost:3001";
  }
};

// async componentDidMount() {
//     const env = process.env.NODE_ENV;
//     const url = env === "production" ? "" : "http://localhost:8888";
//     const res = await axios.get(`${url}/transactions`);
//     // debugger;
//     this.setState({ transactions: res.data });
//   }
