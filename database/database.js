import { mongoose } from "mongoose";

mongoose.connect('mongodb://localhost:27017/med_app');

db.on('error', console.log.bind(console, 'connection error: '));

db.once(
    'open', function() {
        console.log('Database: connect successfully!');
    }
);

export default db;