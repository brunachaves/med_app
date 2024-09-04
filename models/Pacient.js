import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const pacientSchema = new Schema ({
    pacientId: {
        type: String,
        required: [true, 'PacientId is required.'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Pacient name is required.']
    },
    birthdate: {
        type: Date,
        required: [true, 'Birthdate is required.']
    },
    email: {
        type: String,
        required: [true, 'Email contact is required.']
    },
    phone: {
        type: String,
        required: [true, 'Phone contact is required.']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const pacient = mongoose.model('Pacient', pacientSchema);

export default pacient;