
'use strict';

const Hapi = require('hapi');
const vision = require('vision');
// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port: 8000
});

// Public Key
// 14f3c3b10c16b2989229ccb944a33b32 


// Private Key
// e6c215503ed4418bf77ef42c06a478b6b76ece8c


const url = "";
var marvelAPI="https://gateway.marvel.com/v1/public/comics";
function getMarvelsAttention() {
    var time = new Date().getTime();
    var PUBLIC = '14f3c3b10c16b2989229ccb944a33b32';
    var PRIVATE = 'e6c215503ed4418bf77ef42c06a478b6b76ece8c';
    var keys = CryptoJS.MD5(time + PRIVATE + PUBLIC ).toString();

}
function loadHeroes() {

}

// Add the index.html routes
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
