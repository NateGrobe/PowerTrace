const mongoose = require('mongoose')

const reportSchema = mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
  symptoms: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  person: {
    type: mongoose.Schema.Types.ObjectId
  }
})

reportSchema.set('toJSON', {
  transform: (doc, obj) => {
    obj.id = obj._id.toString()
    delete obj._id
    delete obj.__v
  }
})

module.exports = mongoose.model('Report', reportSchema)
