var fs = require('fs'),
    mongoose = require(__dirname + '/lib/mongoose');

var readFileLines = function(file, callback) {
    fs.readFileSync(file).toString().split('\n').forEach(function(line) {
        try {
            var data = JSON.parse(line);
            callback.call(line, data);
        } catch (e) {
            console.log('Error JSON: ', line);
        }
    });
}


// {
//     "_id": "01001",
//     "city": "AGAWAM",
//     "loc": [-72.622739, 42.070206],
//     "pop": 15338,
//     "state": "MA"
// }

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
},{
    collection: 'data'
})
var dataModel = mongoose.model('dataModel', dataSchema)

mongoose.connect('mongodb://localhost:27017/aufgabe7');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    readFileLines(__dirname + '/plz.data', function(data) {
        data.zip = String(''+data._id);
        delete data._id;
        new dataModel(data).save();
    });
});
