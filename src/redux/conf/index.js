import axios from "axios";

export const baseUrl = ` https://tutor-app-brainly.herokuapp.com/`;

export default () => {
  return axios.create({
    baseURL: baseUrl,
  });
};
