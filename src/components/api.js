import axios from 'axios';

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export const fetchUsers = async ({ query, abortCtrl, page, count }) => {
  const response = await axios.get(
    `${BASE_URL}/?q=${query}&page=${page}&count=${count}`,
    { signal: abortCtrl.signal }
  );
  return response.data;
};
