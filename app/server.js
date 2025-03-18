let express = require('express');
let path = require('path');
let fs = require('fs');
let app = express();

// تحديد المنفذ بناءً على المتغير البيئي أو استخدام 80 كافتراضي
const PORT = process.env.PORT || 80;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/profile-picture-andrea', function (req, res) {
  let img = fs.readFileSync(path.join(__dirname, "images/profile-andrea.jpg"));
  res.writeHead(200, {'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
});

app.get('/profile-picture-ari', function (req, res) {
  let img = fs.readFileSync(path.join(__dirname, "images/profile-ari.jpeg"));
  res.writeHead(200, {'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});
