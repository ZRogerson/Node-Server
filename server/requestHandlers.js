var queryString = require("querystring"),
    fs = require("fs");

function home(response, postData) {
  fs.readFile(__dirname + '/../views/home.html', function(error, data) {
    if (error) {
      console.log(error);
      response.writeHead(404);
      response.write("oops this doesn't exist - 404");
      response.end();
    } else {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.write(data, 'utf8');
      response.end();
    }
  });
}

exports.home = home;
