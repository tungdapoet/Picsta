import axios from "axios";

const instance = axios.create({
  baseURL: 'https://localhost:8080/api/',
  timeout: 10000,
});

instance.interceptors.request.use(async config => {
  const header = {};
  const accessToken = window.localStorage.getItem("accessToken");
  if (accessToken) {
    header.Authorization = `Bearer ${accessToken}`
  }
  return {
    ...config,
    headers: {
      ...header,
      ...config.headers
    }
  }
})

export async function get(url, config = {}) {
  return await instance.get(url, {...config})
}

export async function post(url, data, config = {}) {
  return await instance.post(url, data, {...config})
}

export async function put(url, data, config = {}) {
  return await instance.put(url, data, {...config})
}

export async function del(url, config = {}) {
  return await instance.delete(url, {...config})
}

export async function postMultipart(url,config ={}) {
  return await instance.post(url, {
    ...config,
    "Content-Type": "multipart/form-data",
  })
}
