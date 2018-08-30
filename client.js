const createError = require('http-errors');
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// ALSO SERVE THE CLIENT
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ROUTES ERROR HANDLER
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  //console.log(req);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ message: err.message });
});
// END ROUTES ERROR HANDLER

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> Client now listening on PORT ${PORT}!`);
});