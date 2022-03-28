import { Button, Card, Container, Paper, TextareaAutosize } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { editArticleById, fetchArticleById } from '../../api/article';
import { ArticleItem } from '../Articles';

export const ArticleEdit = () => {
  const [article, setArticle] = useState<ArticleItem>();
  const { id = '' } = useParams<string>();
  const navigate = useNavigate();

  const fetchArticles = (id: string) => {
    fetchArticleById(id).then((res) => {
      setArticle(res);
    });
  };

  const editArticle = () => {
    const content = JSON.stringify({ content: article?.content });
    editArticleById(id, content).then((res) => {
      navigate(`/articles/${id}`);
    });
  };

  useEffect(() => {
    fetchArticles(id);
  }, [id]);

  return (
    <div style={{ marginTop: 16 }}>
      <Container maxWidth="md">
        <Card style={{ padding: 16 }}>
          <Paper style={{ marginBottom: 16 }}>{article?.title}</Paper>
          <TextareaAutosize
            style={{ width: '80%' }}
            value={article?.content || ''}
            onChange={(e) => {
              setArticle({ ...article, content: e.target.value });
            }}
          />
          <Button style={{ float: 'right', marginTop: 16 }} color="primary" onClick={editArticle}>
            Submit
          </Button>
        </Card>
      </Container>
    </div>
  );
};
