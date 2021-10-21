const express = require('express');

const router = express.Router();
const Event = require('../models/Event');

router.get('/', (req, res) => {
    Event.find()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err });
        });
});

router.post('/', (req, res) => {
    const event = new Event({
        eventName: req.body.eventName,
        eventDate: req.body.eventDate,
        eventPrice: req.body.eventPrice,
        eventDescription: req.body.eventDescription,
        eventImage: req.body.eventImage,
        eventEmail: req.body.eventEmail
    });
    event.save()
        .then(data => {
            res.status(201).json(data);
        }).catch(err => {
            res.status(500).json({ message: err });
        });
});

router.get('/:eventId', (req, res) => {
    Event.findById(req.params.eventId)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            if (err.message.includes('Cast to ObjectId failed for value')) {
                res.status(404).json({ message: "Evento com o id: " + req.params.eventId + " não encontrado" });
            } else {
                res.status(500).json({ message: err });
            }
        });
});

router.delete('/:eventId', (req, res) => {
    Event.remove({ _id: req.params.eventId })
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err });
        });
});

router.patch('/:eventId', (req, res) => {
    Event.updateOne(
        { _id: req.params.eventId },
        {
            $set: {
                eventName: req.body.eventName,
                eventDate: req.body.eventDate,
                eventPrice: req.body.eventPrice,
                eventDescription: req.body.eventDescription,
                eventImage: req.body.eventImage,
                eventEmail: req.body.eventEmail
            }
        }
    )
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err })
        });
});

module.exports = router;
