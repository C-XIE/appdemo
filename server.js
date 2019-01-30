const express = require('express');
const app = express();
const compression = require('compression')
app.use(compression())


app.use(express.static('build'))

app.listen(3000, () => console.log('app listening on port 3000!'))