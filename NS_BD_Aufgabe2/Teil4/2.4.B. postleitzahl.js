var redis = require("redis"),
    client = redis.createClient();

// arg plz
var plz = process.argv[2];
if (!plz) {
    console.log('Keine PLZ angegeben');
    process.exit(1);
}

// error
client.on("error", function(err) {
    if (err) throw err;
    process.exit(1);
});

// db 3
client.select(1, function(err, res) {
    if (err) {
        console.log(err)
        process.exit(1);
    } else {
        client.hgetall(plz, function(err, obj) {
            console.log(obj);
            client.end();
        });
    }
});
