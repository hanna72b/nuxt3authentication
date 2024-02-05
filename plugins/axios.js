import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  // test url 
  const defaultUrl = "<https://localhost:5001>";

  let api = axios.create({
    baseUrl: defaultUrl,
    headers: {
      common: {},
    },
  });
  return {
    provide: {
      api: api,
    },
  };
});
