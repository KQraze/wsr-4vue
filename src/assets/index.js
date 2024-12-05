import { reactive } from "vue";

const headers = reactive({
  "Content-Type": "application/json",
  Authorization: "Bearer",
});

export const fetchInstance = async (url, options) => {
  let data = null;
  let response = null;

  try {
    response = await fetch(`http://lifestealer86.ru/api-cafe/${url}`, {
      headers,
      ...options,
    });
    data = await response.json();
  } catch (e) {
    console.error(e);
  }

  return { data, response };
};

export const $api = {
  get: (url, options) => fetchInstance(url, options),
  post: (url, body, options) =>
    fetchInstance(url, {
      method: "POST",
      body: JSON.stringify(body),
      ...options,
    }),
  delete: (url, options) =>
    fetchInstance(url, { method: "DELETE", ...options }),
  patch: (url, body, options) =>
    fetchInstance(url, { method: "PATCH", body, ...options }),
};
