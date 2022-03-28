export type RequestMethod = 'GET' | 'POST' | 'PATCH';

export interface RequestProps {
  url: string;
  method?: RequestMethod;
  body?: string;
  headers?: Headers;
}

export const request = ({
  url,
  method = 'GET',
  body,
  headers = new Headers({ 'Content-Type': 'application/json' })
}: RequestProps) => {
  return fetch(url, {
    method,
    body,
    headers
  })
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      return Promise.reject(e);
    });
};
