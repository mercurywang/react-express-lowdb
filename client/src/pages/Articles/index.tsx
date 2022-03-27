import { Button, Card, CardActions, Container, Grid, TextField } from '@material-ui/core';
import React from 'react';

export interface ArticleItem {
  id?: string;
  title?: string;
  subtitle?: string;
  author?: string;
  created_at?: string;
  content?: string;
}
export interface ArticleProps {
  articles?: ArticleItem[];
  search_text?: string;
}
class Articles extends React.Component<{}, ArticleProps> {
  constructor(props: ArticleProps) {
    super(props);
    this.state = {
      articles: [
        {
          id: '1',
          title: 'title1',
          subtitle: 'subtitle1'
        },
        {
          id: '2',
          title: 'title2',
          subtitle: 'subtitle2'
        }
      ],
      search_text: ''
    };
  }

  fetchArticles() {
    fetch(`http://localhost:3000/articles?search_text=${this.state.search_text}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({ articles: res });
      });
  }

  componentDidMount() {
    this.fetchArticles();
  }

  render() {
    return (
      <div>
        <Container maxWidth="md">
          <Card style={{ padding: '20px' }}>
            <Grid container>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  placeholder="Search for title or content"
                  value={this.state.search_text}
                  onChange={(e) => {
                    this.setState({ search_text: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <Button color="primary" variant="contained" onClick={this.fetchArticles.bind(this)}>
                  Search!
                </Button>
              </Grid>
            </Grid>
          </Card>
          {this.state.articles?.length
            ? this.state.articles.map((item) => (
                <Card style={{ padding: '6px' }} key={item.id}>
                  <p>{item.title}</p>
                  <span>{item.subtitle}</span>
                  <CardActions>
                    <Button color="primary" size="small">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              ))
            : null}
        </Container>
      </div>
    );
  }
}

export default Articles;
