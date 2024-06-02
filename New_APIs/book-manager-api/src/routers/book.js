const express = require('express')
const Book = require('../models/book')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/books', auth, async (req, res) => {
    const book = new Book({
        ...req.body,
        owner : req.user._id
    })
    try{
        await book.save()
        res.status(201).send(book)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/books', auth, async (req, res) =>{
    try{
        const books = await Book.find({ owner : req.user._id})
        res.send(books)
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/books/:id', auth, async (req, res) => {

    const _id = req.params.id

    try{
        const book = await Book.findOne({_id, owner : req.user._id})
        if (!book){
            return res.status(404).send()
        }
        res.send(book)
    }catch(e){
        res.status(500).send()
    }
  
})

router.patch('/book/:id', auth, async (req, res) =>{
    try{ 
        const book = await Book.findOneAndUpdate({ _id: req.params.id, owner: req.user._id },
            req.body,{ new: true, runValidators: true })

        if (!book){
            return res.status(404).send()  
        }
        res.send(book)
    }catch(e){
        res.status(500).send(e)
    }
})

router.delete('/book/:id', auth, async (req, res) =>{
    try{ 
        const book = await Book.findOneAndDelete({_id: req.params.id, owner : req.user._id})
        if (!book){
            return res.status(404).send()
        }
        res.send(book)
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router