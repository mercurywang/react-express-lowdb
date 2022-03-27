import { Button, Card, Container, Paper, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchArticleById } from '../../api/article';
import { ArticleItem } from '../Articles';

const ArticleDetail: React.FC = () => {
  const [article, setArticle] = useState<ArticleItem>();
  const [comment, setComment] = useState<string>('');

  const { id = '' } = useParams<string>();

  const commitComment = () => {
    fetch(`http://localhost:3000/articles/${id}/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setComment(res);
        fetchArticleById(id).then((res) => setArticle(res));
      })
      .then(() => {
        setComment('');
      })
      .catch((e) => {
        alert('Error occurs during committing');
      });
  };

  useEffect(() => {
    fetchArticleById(id).then((res) => setArticle(res));

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

        <Paper>Comments</Paper>
        {article?.comments
          ? article.comments.map((item, idx) => (
              <Card key={idx}>
                <p>{item}</p>
              </Card>
            ))
          : null}
        <TextField
          style={{ marginTop: '16px' }}
          value={comment}
          placeholder="Comment"
          fullWidth
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <Button style={{ float: 'right', marginTop: '16px' }} color="primary" onClick={commitComment}>
          Commit
        </Button>
      </Container>
    </div>
  );
};

export default ArticleDetail;
