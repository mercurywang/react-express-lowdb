## Clone

```
git clone git@github.com:mercurywang/react-express-lowdb.git
```

## Install

```bash
cd server
yarn / npm install

cd client
yarn / npm install

// install json
yarn global add json
```

## Start server

```bash
yarn start

// write data
curl -X POST 'http://localhost:3000/articles' \
-H 'Content-Type: application/json' \
-d '{"title": "title1"}'
{"id":2,"created_at":"2022-01-17 21:21:25","update_at":"2022-01-17 21:21:25","title":"title1"}

// read data
curl 'http://localhost:3000/articles' | json
```

## Start Client

```bash
PORT=4000 yarn start
```
