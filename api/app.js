const { v4: uuidv4 } = require('uuid');
var express = require('express');
var app = express();
// var uuid = require('node-uuid');
var pool = require('./db');
const port = 1337
// var pg = require('pg');
// var conString = "postgres://postgres:MasterPos1212@localhost:5432/data";

// sample routes for testing 

app.get('/', (req, res) => {
  res.sendStatus(200)
});

app.get('/home', (req, res) => {
  res.sendStatus(200)
});

// real api 

app.get('/api/status', async (req, res) => {
  try {
    const data = await pool.query('SELECT now() as time', [], function (err, result) {
      return res.json({
        request_uuid: uuidv4(),
        time: result.rows[0].time
      })
    })
  } catch (err) {
    console.log(err)
    res.sendStatus(500);
  }

})


// Routes
// app.get('/api/status/test', function (req, res) {
//   pg.connect(conString, function (err, client, done) {
//     if (err) {
//       return res.status(500).send('error fetching client from pool');
//     }
//     client.query('SELECT now() as time', [], function (err, result) {
//       //call `done()` to release the client back to the pool
//       done();

//       if (err) {
//         return res.status(500).send('error running query');
//       }

//       return res.json({
//         request_uuid: uuidv4(),
//         time: result.rows[0].time
//       });
//     });
//   });
// });


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found 404');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

// added listening port  for confirm the process

app.listen(port, () => console.log(`Server is Listening to the: ${port}`))

module.exports = app;
