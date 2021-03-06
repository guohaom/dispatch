var express = require('express')
var  ejs = require('ejs');
var app = express();


const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
    selected: true,
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
    selected: true,
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json

app.use('/js', express.static(__dirname + '/views/js'));//指定静态目录,当以/source开头的请求直接转发到/source目录下

app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.get('/', function(req, res){
    res.render('./home')
});

app.post('/login',require('./server/routes/user.js').login);

app.post('/diary/edit',require('./server/routes/diary.js').edit);

app.post('/diary/last',require('./server/routes/diary.js').getLast);

app.post('/noteType/:type',require('./server/routes/noteType.js').getType);

// app.get('/index',function(req,res){
//    res.render('./page/index');
// });

app.get('/data',function(req,res){
    res.send(tableData);
})

app.listen(3000);

