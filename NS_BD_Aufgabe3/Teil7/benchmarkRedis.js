var redis = require(__dirname + '/lib/redis'),
    client = redis.createClient();

// arg times
var times = Number(process.argv[2]);
if (!times) {
    console.log('Keine Anzahl der Durchläufe angegeben');
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


    var count = 1;

    var start = new Date().getTime();

    for (var i = 1; i <= times; i++) {
        client.smembers("HAMBURG", function(err, keys) {
            if (err) throw err;
            count++;
            if (count == times) {
                var end = new Date().getTime();
                console.log('Laufzeit: ', (end - start) / 1000);
            }
        });
    };
});
