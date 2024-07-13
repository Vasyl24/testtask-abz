import axios from 'axios';

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';

export const fetchUsers = async ({ abortCtrl, page, count }) => {
  const response = await axios.get(`${BASE_URL}/?page=${page}&count=${count}`, {
    signal: abortCtrl.signal,
  });
  return response.data;
};
