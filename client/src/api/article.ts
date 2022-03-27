import { request } from '../utils/request';

export const fetchArticleById = (id: string) => {
  const url = `http://localhost:3000/articles/${id}`;
  return request(url)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      alert('Error occurs while fetching article details.');
    });
};

export const fetchAllArticles = (text?: string) => {
  const url = `http://localhost:3000/articles?search_text=${text}`;
  return request(url)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      alert('Error occurs while fetching articles.');
    });
};
