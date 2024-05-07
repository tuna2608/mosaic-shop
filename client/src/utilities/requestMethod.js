import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzViYzZjNWZmY2YxMjU4ODQxNTYyYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNTA2Nzk5NCwiZXhwIjoxNzE1MzI3MTk0fQ.Ej-sQ0lVjvtR7WJEsWBuYsDBhUhrOrF0sr4MKho7oc0';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
