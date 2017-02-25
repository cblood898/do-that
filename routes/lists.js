const express = require('express');
const router = express.Router();
const List = require('../models/list');

router.get('/', (req, res) => {
  List.find( ( err, lists ) => {
    res.json(lists);
  });
});

router.post('/', (req, res) => {
  new List({
    name: req.body.name
  }).save( (err, list) => {
    res.json(list);
  });
});

router.put('/:id', ( req, res ) => {
  let { name } = req.body;
  List.findByIdAndUpdate(
    req.params.id,
    { $set: { name }},
    { new: true },
    (err, list) => {
      res.json(list);
    });
});

router.delete('/:id', (req, res) => {
  let boardId = req.params.id;
  List.findById(boardId, (err, list) => {
    list.remove();
    // List.find({ boardId }, (err, lists) => {
    //   lists.forEach( list => { 
    //     Card.find({'listId': list._id}).remove().exec();
    //     list.remove() 
    //   } );
    // });
    res.status(200).send({success: true});
  });
});

router.get('/:id', (req, res) => {
  List.findById(req.params.id, (err, list) => {
    res.render('list', { list })
  })
});

module.exports = router;
