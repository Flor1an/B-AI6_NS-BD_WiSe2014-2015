var mongoose = require(__dirname + '/lib/mongoose');

// arg zip
var zip = process.argv[2];
if (!zip) {
    console.log('Keine PLZ angegeben');
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
})
var dataModel = mongoose.model('dataModel', dataSchema)

mongoose.connect('mongodb://localhost:27017/aufgabe7');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {


    dataModel.find({zip:zip}, function(err, data) {
        if (err) throw err;
        console.log(data);
        db.close();
    })



});
