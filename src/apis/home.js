import axios from "axios";

export const getHome = () =>
  // eslint-disable-next-line no-async-promise-executor
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "http://localhost:5000/api/home",
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
