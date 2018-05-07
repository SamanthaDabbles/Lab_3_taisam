
'use strict';

const Hapi=require('hapi');
const vision = require('vision');
// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port: 8000
});

const url = "http://mal-api.comanimelist/kittymask?format=json";

// Add the index.html route
server.route({
    method:'GET',
    path:'/',
    handler:function (request, h) {
        
        return'<h1> You have reached the homepage </h1>';
    }
});

// Add the content.html route
server.route({
    method:'GET',
    path:'/content.html',
    handler:function (request,h) {
        
        return'<h1> You have reached the content page </h1>';
    }
});

// Start the server
async function start() {
    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname
    });
    await server.register(vision);
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
