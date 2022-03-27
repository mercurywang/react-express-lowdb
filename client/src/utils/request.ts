export const request = (url: string) => {
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      return Promise.reject(e);
    });
};
