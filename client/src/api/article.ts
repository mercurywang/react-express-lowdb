import { request } from '../utils/request';

export const fetchArticleById = (id: string) => {
  const url = `http://localhost:3000/articles/${id}`;
  return request({ url })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      alert('Error occurs while fetching article details.');
    });
};

export const fetchAllArticles = (text?: string) => {
  const url = `http://localhost:3000/articles?search_text=${text}`;
  return request({ url })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      alert('Error occurs while fetching articles.');
    });
};

export const editArticleById = (id: string, content: string) => {
  const url = `http://localhost:3000/articles/${id}`;
  return request({ url, method: 'PATCH', body: content })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      alert('Error occurs while updating article.');
    });
};

export const commitCommentById = (id: string, content: string) => {
  return fetch(`http://localhost:3000/articles/${id}/comments`, {
    method: 'POST',
    body: content
  })
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      alert('Error occurs during committing');
    });
};
