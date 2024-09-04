import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema ({
    prescriptionId: {
        type: String,
        required: [true, 'PrescriptionId is required.'],
        unique: true
    },
    date: {
        type: Date,
        required: [true, 'Appointment Date is required.']
    },
    appointmentId: {
        type: String,
        required: [true, 'AppointmentId is required.']
    },
    medicine: {
        type: String,
        required: [true, 'Medicine is required.']
    },
    dosage: {
        type: String,
        required: [true, 'Dosage is required.']
    },
    instructions: {
        type: String,
        required: [true, 'Instructions is required.']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const prescription = mongoose.model('Prescription', prescriptionSchema);

export default prescription;