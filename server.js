const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');

const app = express();
const PORT = process.env.PORT || 4000;

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log('Server listening on port ', PORT);
});
