import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

let TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzViYzZjNWZmY2YxMjU4ODQxNTYyYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNjE3MDE4MywiZXhwIjoxNzE2NDI5MzgzfQ.Xd1u1DQBsys2fxk8MwYwkddMjYjXhoJ04MC57CH5c2c";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
