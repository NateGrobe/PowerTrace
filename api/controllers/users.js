const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (req, res) => {
  const users = await User
    .find({}).populate('person')
  res.json(users.map(user => user.toJSON()))
})

usersRouter.post('/', async (req, res) => {
  const body = req.body

  const passwordHash = await bcrypt.hash(body.password, 10)

  const user = new User({
    username: body.username,
    passwordHash,
    infected: body.infected,
  })

  const savedUser = await user.save()
  res.json(savedUser)
})

// single user
usersRouter.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  if (user) 
    res.json(user.toJSON())
  else
    res.status(404).end()
})

usersRouter.put('/:id', async (req, res) => {
  const body = req.body
  const userBeforeChange = await User.findById(req.params.id)
  const newConnection = await User.findById(body.connections)
  const connIsUnique = userBeforeChange.connections.filter(c => c == body.connections).length === 0

  let user = {}

  if (connIsUnique) {
    user = {
      infected: newConnection.infected || userBeforeChange.infected,
      connections: body.connections 
        ? userBeforeChange.connections.concat(body.connections) 
        : userBeforeChange.connections,
    }
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, user, { new: true })
  res.json(updatedUser.toJSON())
})

module.exports = usersRouter
