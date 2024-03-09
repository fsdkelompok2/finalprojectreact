import axios from "axios";

const apiUsersUrl = "https://65daf43b3ea883a15290ec32.mockapi.io/api/users";

const getUsers = () => {
  const request = axios.get(apiUsersUrl);
  return request.then((response) => response.data);
};

const postUsers = (data) => {
  const request = axios.post(apiUsersUrl, data);
  return request.then((response) => response.data);
};

export { getUsers, postUsers };
