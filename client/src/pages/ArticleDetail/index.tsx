import { Card, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ArticleItem } from '../Articles';

const ArticleDetail: React.FC = () => {
  const [article, setArticle] = useState<ArticleItem>();
  const { id } = useParams<string>();

  const fetchArticle = () => {
    fetch(`http://localhost:3000/articles/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((res: ArticleItem) => {
        setArticle(res);
      })
      .catch((e) => {
        alert('Error occurs while fetching article details.');
      });
  };

  useEffect(() => {
    fetchArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Container maxWidth="md">
        <Card style={{ padding: '0px 24px' }}>
          <h1>{article?.title}</h1>
          <h5>{article?.subtitle}</h5>
          <span>
            ---{article?.author} at {article?.created_at}
          </span>
          <p>{article?.content}</p>
        </Card>
      </Container>
    </div>
  );
};

export default ArticleDetail;
