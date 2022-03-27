```bash
// write data
curl -X POST 'http://localhost:3000/articles' \
-H 'Content-Type: application/json' \
-d '{"title": "title1"}'
{"id":2,"created_at":"2022-01-17 21:21:25","update_at":"2022-01-17 21:21:25","title":"title1"}

// insert comments
curl -X POST 'localhost:3000/articles/1/comments' \
-H 'Content-Type: application/json' \
-d '{
  "comment": "Cool"
  }' | json

// modify article
curl -X PATCH 'localhost:3000/articles/1' \
-H 'Content-Type: application/json' \
-d '{
  "content": "new content"
  }' | json

// read data
curl 'http://localhost:3000/articles' | json
```
