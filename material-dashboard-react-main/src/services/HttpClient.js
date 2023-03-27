import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Content-Type": "application/json",
  },
});

// httpClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("tokenLlantas");
//     config.headers = {
//       "Content-Type": "application/json",
//     };

//     if (token) config.headers.Authentication = token;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// httpClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     console.log("error", error)
//     if (error.response) {
//       const status = error.response.status;
//       if (status === 401) {
//         localStorage.removeItem("currentUserLlantas");
//         localStorage.removeItem("tokenLlantas");
//       }
//       return Promise.reject(error.response.data);
//     }

//     return Promise.reject({
//       status: 500,
//       message: "Error de conexión con el servidor.",
//     });
//   }
// );

// const httpFormDataClient = axios.create({
//   baseURL: process.env.REACT_APP_API,
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },
// });

// httpFormDataClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("tokenLlantas");
//     config.headers = {
//       "Content-Type": "multipart/form-data",
//     };

//     if (token) config.headers.Authentication = token;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export { httpFormDataClient };

export default httpClient;
