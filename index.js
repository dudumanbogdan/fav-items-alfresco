const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicweb = process.env.PUBLICWEB || './dist';

app.use(express.static(publicweb));
console.log(`serving ${publicweb}`);

app.get('*', (request, response) => {
  response.sendFile(`index.html`, { root: publicweb });
});

app.listen(port, (err) => {
  if(err) {
    return console.log('', err);
  }

  console.log(`server is listening on ${port}`);
})
