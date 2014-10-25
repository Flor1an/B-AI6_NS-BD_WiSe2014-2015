var redis = require("redis"),
    client = redis.createClient();

// arg city
var city = process.argv[2];
if (!city) {
    console.log('Keine Start angegeben');
    process.exit(1);
}

// error
client.on("error", function(err) {
    if (err) throw err;
    process.exit(1);
});

// db 3
client.select(2, function(err, res) {
    if (err) throw err;
    client.smembers(city, function(err, keys) {
        if (err) throw err;
        if (!keys.length) {
            console.log('Unbekannte Stadt');
            client.end();
        }
        keys.forEach(function(key, index) {
            client.hgetall(key, function(err, hash) {
                if (err) throw err;
                keys[index] = hash;
                if (index == keys.length - 1) {
                    console.log(keys);
                    client.end();
                }
            });
        });
    });
});
