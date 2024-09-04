import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema ({
    appointmentId: {
        type: String,
        required: [true, 'AppointmentId is required.'],
        unique: true
    },
    date: {
        type: Date,
        required: [true, 'Appointment Date is required.']
    },
    doctorId: {
        type: String,
        required: [true, 'DoctorId is required.']
    },
    pacientId: {
        type: String,
        required: [true, 'PacientId is required.']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const appointment = mongoose.model('Appointment', appointmentSchema);

export default appointment;