var lib_fs = require('fs'),
    lib_redis = require('./lib/redis');

var readFileLines = function(file, callback) {
    var lines = lib_fs.readFileSync(file).toString().split('\n');
    for (var i in lines) {
        try {
        	var data = JSON.parse(lines[i]);
            callback.call(lines[i], data);
            // console.log(json);
        } catch (e) {
            console.log('Error JSON', e);
        }
    }
}


var client = lib_redis.createClient();

// if you'd like to select database 3, instead of 0 (default), call
client.select(1, function() {

    client.on("error", function(err) {
        console.log("Error select", err);
    });

    readFileLines('./plz.data', function(data) {

        var key = data._id;

        delete data._id;

        // console.log('\n');
        // console.log(key)
        // console.log(data);

        client.hmset(key, data, function(err, obj) {
            console.log('Error hmset', err, obj);
        });

    });

    client.quit();
});
