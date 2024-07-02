const express = require('express')
const Task = require('../models/new_task')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/tasks', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner : req.user._id
    })
    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/tasks', auth, async (req, res) =>{
    try{
        const tasks = await Task.find({ owner : req.user._id})
        res.send(tasks)
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/tasks/:id', auth, async (req, res) => {

    const _id = req.params.id

    try{
        const task = await Task.findOne({_id, owner : req.user._id})
        if (!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send()
    }
  
})

router.patch('/task/:id', auth, async (req, res) =>{
    try{ 
        const task = await Task.findOneAndUpdate({ _id: req.params.id, owner: req.user._id },
            req.body,{ new: true, runValidators: true })

        if (!task){
            return res.status(404).send()  
        }
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})

router.delete('/task/:id', auth, async (req, res) =>{
    try{ 
        const task = await Task.findOneAndDelete({_id: req.params.id, owner : req.user._id})
        if (!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router