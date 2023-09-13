  import axios from "axios";
  import { localStorageAction } from "./localstorage";

  axios.defaults.baseURL = "http://127.0.0.1:8000";

  export const sendMultipartRequest = async ({
    method = "GET",
    route,
    body,
    files,
    includeHeaders = true,
  }) => {
    if (!route) throw Error("URL required");

    const headers = includeHeaders
      ? {
          Authorization: `Bearer ${localStorageAction("access_token")}`,
          "Content-Type": "multipart/form-data",
        }
      : {};

    const formData = new FormData();
    if (files) {
      files.forEach((file) => {
        formData.append("files", file);
      });
    }

    if (body) {
      Object.keys(body).forEach((key) => {
        formData.append(key, body[key]);
      });
    }

    try {
      const response = await axios.request({
        method,
        url: route,
        data: formData,
        headers: {
          ...headers,
          "Content-Type": "multipart/form-data", 
        }
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  };
