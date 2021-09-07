const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/schema');
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.get('/', (req: any, res: any) => {
  res.send('10 Hour Labs!!!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `The application is listening on port ${process.env.PORT || 3000}`
  );
});
