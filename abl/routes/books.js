const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Book = require('../models/Book');

// @route     GET api/books
// @desc      Get a user's collection
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const collection = await Book.find({ user: req.user.id });
    res.json(collection);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/books
// @desc      Add new book to personal collection
// @access    Private
router.post('/', [auth, [check('title', 'Title is required').not().isEmpty()]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { title, author, averageRating, publishYear, dateAdded, photo } = req.body;
  try {
    const newBook = new Book({
      title,
      author,
      averageRating,
      publishYear,
      photo,
      dateAdded,
      user: req.user.id,
    });

    const book = await newBook.save();
    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
