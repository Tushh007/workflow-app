const express = require('express');

const app = express();

app.use(express.static('./dist/workflow-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/workflow-app/'}),
);

app.listen(process.env.PORT || 8080);