const reportRouter = require('express').Router()
const Report = require('../models/report')
const User = require('../models/user')

reportRouter.get('/', async (req, res) => {
  const reports = await Report.find({})
  res.json(reports.map(report => report.toJSON()))
})

reportRouter.post('/', async (req, res) => {
  const body = req.body

  const user = await User.findById(body.person)

  if (body.status === 'positive' || body.status === 'symptoms')
    user.infected = true

  const report = new Report({
    status: body.status,
    symptoms: body.symptoms,
    date: body.date,
    person: user._id,
  })

  const savedReport = await report.save()
  user.reports = user.reports.concat(savedReport._id)
  await user.save()
    
  res.json(savedReport)
})

module.exports = reportRouter
