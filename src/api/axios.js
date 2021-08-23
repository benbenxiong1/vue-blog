import axios from "axios";
import { Message } from "element-plus";

//json-axios实例
const service = axios.create({
  timeout: 60000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "X-Requested-With": "XMLHttpRequest",
  },
  baseURL: "xxx",
});

//formData-axios实例
const serviceForm = axios.create({
  timeout: 60000,
  headers: {
    "Content-Type": "multipart/form-data; charset=UTF-8",
    "X-Requested-With": "XMLHttpRequest",
  },
  baseURL: "xxx",
});

//配置http request 拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

//http request 拦截器 在发送请求之前做些什么
let request = function (config) {
  // const token = getToken();
  // if (token) {
  //   // 判断是否存在token，如果存在的话，则每个http header都加上token
  //   config.headers.token = token;
  // }
  return config;
};

//http request 拦截器 在请求错误时做些什么
let request_err = function (err) {
  return Promise.reject(err);
};

//给每个实例使用这些request拦截器
service.interceptors.request.use(request, request_err);
serviceForm.interceptors.request.use(request, request_err);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

//响应成功前做拦截处理
let response = function (res) {
  const data = res.data;
  const message = `${data.code}--${data.msg}` || "未知错误";
  if (res.status == 200) {
    if (data.code == 200) {
      return data;
    } else {
      Message({
        message: message,
        type: "error",
      });
    }
  }
};
//响应失败前拦截处理
let response_err = function (err) {
  if (err.response) {
    const data = err.response.data;
    const message = `${data.code}--${data.msg}` || "未知错误";
    Message({
      message: message,
      type: "error",
    });
  }
  return Promise.reject(err);
};

//给每个实例使用这些response拦截器
service.interceptors.response.use(response, response_err);
serviceForm.interceptors.response.use(response, response_err);

//一种是直接挂在window对象下,这样写可以在其它文件中直接使用service和serviceForm
window.service = service;
window.serviceForm = serviceForm;
