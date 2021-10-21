const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    eventDate: {
        type: String,
        required: true,
    },
    eventPrice: {
        type: Number,
        required: true,
    },
    eventDescription: {
        type: String,
        required: true,
    },
    eventImage: {
        type: String,
        required: true,
    },
    eventEmail: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Events', EventSchema);
