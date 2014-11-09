var mongoose = require(__dirname + '/lib/mongoose');

// arg times
var times = Number(process.argv[2]);
if (!times) {
    console.log('Keine Anzahl der Durchläufe angegeben');
    process.exit(1);
}

var dataSchema = mongoose.Schema({
    city: {
        type: String
    },
    zip: {
        type: Number
    },
    loc: [{
        type: Number
    }],
    pop: {
        type: Number
    },
    state: {
        type: String
    }
}, {
    collection: 'data'
});
var dataModel = mongoose.model('dataModel', dataSchema)

mongoose.connect('mongodb://localhost:27017/aufgabe7');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {


    var count = 1;

    var start = new Date().getTime();

    for (var i = 1; i <= times; i++) {
        dataModel.find({
            city: "HAMBURG"
        }, function(err, data) {
            if (err) throw err;
            count++;
            if (count == times) {
                var end = new Date().getTime();
                console.log('Laufzeit: ', (end - start) / 1000);
            }
        })
    };



});
