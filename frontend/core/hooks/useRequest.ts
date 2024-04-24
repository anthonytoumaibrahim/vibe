import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export const useRequest = () => {
  const sendRequest = async (method = "GET", path = "/", body = {}) => {
    try {
      const response = await axios({
        method: method,
        url: path,
        data: body,
        headers: {
          Authorization: `Bearer`,
        },
      });

      return response;
    } catch (error) {
      // if (error.response.status === 401) {
      //   // dispatch({
      //   //   type: "userSlice/removeUser",
      //   // });
      //   // navigate("/");
      // } else {
      //   throw error;
      // }
    }
  };

  return sendRequest;
};
