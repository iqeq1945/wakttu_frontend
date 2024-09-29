import { Result } from '@/redux/result/resultSlice';
import axios from 'axios';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const client = axios.create({ baseURL: API_URL, withCredentials: true });

export const R2_URL = process.env.NEXT_PUBLIC_R2_URL;
export const getR2URL = (src: string) => R2_URL + src;

export const updatePlayCount = async (type: number = 0) => {
  let id = 'LAST_COUNT';
  if (type === 1) id = 'KUNG_COUNT';
  else if (type === 2) id = 'BELL_COUNT';
  const { stats } = await client
    .get(`/wakta/stat?id=${id}`)
    .then((response) => response.data)
    .catch(console.error);
  const data = await client
    .put('/wakta/stat', {
      stats: [{ id, val: stats.length > 0 ? stats[0].val + 1 : 1 }],
    })
    .then((response) => response.data)
    .catch(console.error);
};

export const updateResult = async (result: Result[]) => {
  const data = await client
    .put(`/wakta/result`, result)
    .then((response) => response.data)
    .catch(console.error);
  console.log(data);
};
