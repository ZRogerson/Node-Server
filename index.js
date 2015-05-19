var server = require("./server/server"),
    router = require("./server/router"),
    requestHandlers = require("./server/requestHandlers");

var handle = {};
handle["/"] = requestHandlers.home;
handle["/home"] = requestHandlers.home;

server.start(router.route, handle);