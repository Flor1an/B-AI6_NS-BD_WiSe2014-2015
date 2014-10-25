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
            console.log('Error JSON: ', lines[i]);
        }
    }
}

var client = lib_redis.createClient();

client.select(2, function() {

    client.on("error", function(err) {
        if (err) throw err;
        process.exit(1);
    });

    readFileLines('./plz.data', function(data) {

        var key = data._id;

        delete data._id;

        client.hmset(key, data, function(err, obj) {
            if (err) throw err;
        });

    });

    client.quit();
});
